import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BLOG = 'https://blog.naver.com/yhjo0720';
const MAX_BYTES = 6 * 1024 * 1024;
const decodeXml = value => value.replace(/&(?:amp|lt|gt|quot|apos);/g, x => ({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'"}[x]));
export function parseRss(xml) {
  if (!xml.includes('<rss')) throw new Error('Invalid RSS response');
  const result = new Map();
  for (const match of xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/g)) {
    const field = name => {
      const text = match[1].match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`))?.[1] || '';
      return decodeXml(text.replace(/^\s*<!\[CDATA\[([\s\S]*)\]\]>\s*$/, '$1'));
    };
    const id = field('link').match(/yhjo0720\/(\d+)/)?.[1];
    const image = field('description').match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i)?.[1];
    if (id && image) result.set(id, decodeXml(image));
  }
  return result;
}
export function parseCatalogJson(raw) {
  // Naver's public list can escape apostrophes in its unused pagingHtml field.
  // Normalize only that non-JSON escape; never evaluate the response as code.
  return JSON.parse(raw.replace(/(\\+)'/g, (_, slashes) => (slashes.length % 2 ? slashes.slice(0,-1) : slashes) + "'"));
}
export function parseRssDates(xml) {
  if (!xml.includes('<rss')) throw new Error('Invalid RSS response');
  const dates = new Map();
  for (const match of xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/g)) {
    const id = match[1].match(/yhjo0720\/(\d+)/)?.[1];
    const raw = match[1].match(/<pubDate>([^<]+)<\/pubDate>/)?.[1];
    const timestamp = Date.parse(raw || '');
    if (id && Number.isFinite(timestamp)) {
      dates.set(id, new Date(timestamp + 9 * 60 * 60 * 1000).toISOString().slice(0,10).replace(/-/g,'.'));
    }
  }
  return dates;
}
export function normalizeCatalog(pages, dates = new Map()) {
  const expected = Number(pages[0]?.totalCount);
  if (!Number.isSafeInteger(expected) || expected < 1 || expected > 5000) throw new Error('Invalid public post count');
  const seen = new Set();
  const posts = [];
  for (const page of pages) {
    if (page.resultCode !== 'S' || Number(page.totalCount) !== expected || !Array.isArray(page.postList)) throw new Error('Incomplete or changing blog catalog');
    for (const item of page.postList) {
      const id = String(item.logNo);
      if (!/^\d+$/.test(id) || seen.has(id)) throw new Error('Invalid or duplicate post ID');
      const title = decodeURIComponent(item.title.replace(/\+/g, ' '));
      const rawDate = String(item.addDate || '').trim();
      const parts = rawDate.replace(/\s/g, '').replace(/\.$/, '').split('.');
      const absolute = parts.length === 3 && parts.every(p => /^\d+$/.test(p));
      const relative = /^(?:\d+\s*(?:초|분|시간|일)\s*전|방금\s*전|오늘|어제)$/.test(rawDate);
      if (!title.trim() || (!absolute && !relative)) throw new Error(`Invalid post title/date: ${id} (${rawDate})`);
      seen.add(id);
      posts.push({title, url:`${BLOG}/${id}`, date:absolute ? parts.map((p,i)=>i ? p.padStart(2,'0') : p).join('.') : (dates.get(id) || rawDate)});
    }
  }
  if (posts.length !== expected) throw new Error(`Partial blog list: ${posts.length}/${expected}; keeping old list`);
  return posts;
}
function safeImagePath(value) {
  return typeof value === 'string' && /^assets\/[A-Za-z0-9_-]+\.(jpg|jpeg|png|gif|webp|svg)$/.test(value);
}
async function exists(file) { try { return (await fs.stat(file)).size > 0; } catch { return false; } }
async function request(url) {
  const response = await fetch(url, {signal:AbortSignal.timeout(20000), headers:{'User-Agent':'BR-GOLF-Blog-Sync/1.0'}});
  if (!response.ok) throw new Error(`HTTP ${response.status} from ${new URL(url).hostname}`);
  return response;
}
async function text(url) { return (await request(url)).text(); }
async function imageFor(post, root, overrides, previous, rss) {
  const id = post.url.split('/').at(-1);
  const override = overrides[id];
  if (override) {
    if (!safeImagePath(override) || !await exists(path.join(root,"public",override))) throw new Error('Missing/invalid manual thumbnail override');
    return override;
  }
  const old = previous.get(post.url)?.image;
  if (safeImagePath(old) && old.startsWith(`assets/blog-thumb-${id}.`) && await exists(path.join(root,"public",old))) return old;
  let url = rss.get(id);
  try {
    if (!url) {
      const html = await text(`https://m.blog.naver.com/yhjo0720/${id}`);
      url = decodeXml(html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1] || '');
    }
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' || !/(^|\.)pstatic\.net$/.test(parsed.hostname)) throw new Error('Unsupported image source');
    const response = await request(parsed.href);
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (bytes.length < 16 || bytes.length > MAX_BYTES) throw new Error('Invalid thumbnail size');
    let extension;
    if (bytes[0]===0xff && bytes[1]===0xd8) extension='jpg';
    else if (bytes[0]===0x89 && bytes[1]===0x50) extension='png';
    else if (String.fromCharCode(...bytes.slice(0,3))==='GIF') extension='gif';
    else if (String.fromCharCode(...bytes.slice(0,4))==='RIFF' && String.fromCharCode(...bytes.slice(8,12))==='WEBP') extension='webp';
    else throw new Error('Unknown image format');
    const image=`assets/blog-thumb-${id}.${extension}`;
    await fs.writeFile(path.join(root,"public",image),bytes);
    return image;
  } catch(error) {
    console.warn(`Post ${id}: thumbnail unavailable; using representative image (${error.message})`);
    if (safeImagePath(old) && await exists(path.join(root,"public",old))) return old;
    return 'assets/blog-placeholder.svg';
  }
}
export async function syncBlog(root) {
  const readJson = async (file,fallback) => { try{return JSON.parse((await fs.readFile(path.join(root,file),'utf8')).replace(/^\uFEFF/,''));}catch(error){if(error.code==='ENOENT')return fallback;throw error;} };
  const first=parseCatalogJson(await text('https://blog.naver.com/PostTitleListAsync.naver?blogId=yhjo0720&currentPage=1&countPerPage=30'));
  const total=Number(first.totalCount);
  if (!Number.isSafeInteger(total) || total<1 || total>5000) throw new Error('Invalid catalog; no site changes written');
  const pages=[first];
  for(let page=2;page<=Math.ceil(total/30);page++) pages.push(parseCatalogJson(await text(`https://blog.naver.com/PostTitleListAsync.naver?blogId=yhjo0720&currentPage=${page}&countPerPage=30`)));
  let rss=new Map(), dates=new Map();try{const xml=await text('https://rss.blog.naver.com/yhjo0720.xml');rss=parseRss(xml);dates=parseRssDates(xml);}catch(error){console.warn(`RSS unavailable: ${error.message}`);}
  const posts=normalizeCatalog(pages,dates);
  const overrides=await readJson('blog-thumbnail-overrides.json',{});
  const previous=new Map((await readJson('blog-posts.json',[])).map(p=>[p.url,p]));
  for(const post of posts) post.image=await imageFor(post,root,overrides,previous,rss);
  for(const post of posts) if(!await exists(path.join(root,"public",post.image)))throw new Error('Missing thumbnail; refusing to update');
  await fs.writeFile(path.join(root,'blog-posts.json'),JSON.stringify(posts,null,2)+'\n');
  console.log(`Blog sync complete: ${posts.length} public posts; manual thumbnail overrides preserved.`);
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  syncBlog(path.resolve(process.argv[2]||'.')).catch(error=>{console.error(error.message);process.exitCode=1;});
}
