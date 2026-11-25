import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeCatalog,parseCatalogJson,parseRss,parseRssDates} from '../scripts/sync-blog.mjs';
const post=(id,title='테스트 글')=>({logNo:id,title:encodeURIComponent(title).replace(/%20/g,'+'),addDate:'2026. 11. 16.'});
test('all public pages must be complete and unique',()=>{
 const pages=[{resultCode:'S',totalCount:'2',postList:[post('1')]},{resultCode:'S',totalCount:'2',postList:[post('2')]}];
 assert.equal(normalizeCatalog(pages).length,2);
 assert.throws(()=>normalizeCatalog(pages.slice(0,1)),/Partial/);
 assert.throws(()=>normalizeCatalog([pages[0],pages[0]]),/duplicate/);
 assert.throws(()=>normalizeCatalog([{resultCode:'S',totalCount:'0',postList:[]}]),/Invalid/);
});
test('decode titles and normalize dates',()=>{
 const [p]=normalizeCatalog([{resultCode:'S',totalCount:1,postList:[post('123','클럽 & 그립 + 피팅')]}]);
 assert.equal(p.title,'클럽 & 그립 + 피팅');assert.equal(p.date,'2026.11.16');assert.equal(p.url,'https://blog.naver.com/yhjo0720/123');
});
test('RSS CDATA images and entities are parsed',()=>{
 const rss='<rss><item><link><![CDATA[https://blog.naver.com/yhjo0720/123?a=1]]></link><description><![CDATA[<img src="https://blogthumb.pstatic.net/a.jpg?x=1&amp;y=2" />]]></description></item></rss>';
 assert.equal(parseRss(rss).get('123'),'https://blogthumb.pstatic.net/a.jpg?x=1&y=2');
});

test('Naver paging markup apostrophes are normalized without evaluating code',()=>{
 const raw=String.raw`{"totalCount":"1","pagingHtml":"onclick=\'go(1)\'"}`;assert.equal(parseCatalogJson(raw).totalCount,'1');assert.equal(parseCatalogJson(raw).pagingHtml,"onclick='go(1)'");
});

test('sync writes JSON and thumbnails into the Next.js source layout', async (t) => {
 const {mkdtemp, mkdir, readFile, rm} = await import('node:fs/promises');
 const {tmpdir} = await import('node:os');
 const {join} = await import('node:path');
 const {syncBlog} = await import('../scripts/sync-blog.mjs');
 const root = await mkdtemp(join(tmpdir(), 'dongnae-sync-'));
 t.after(() => rm(root, {recursive: true, force: true}));
 await mkdir(join(root, 'public', 'assets'), {recursive: true});
 const image = new Uint8Array(16);
 image.set([0xff, 0xd8]);
 t.mock.method(globalThis, 'fetch', async (url) => {
  const hostname = new URL(url).hostname;
  if (hostname === 'blog.naver.com') {
   return Response.json({resultCode: 'S', totalCount: 1, postList: [post('123')]});
  }
  if (hostname === 'rss.blog.naver.com') {
   return new Response('<rss><item><link>https://blog.naver.com/yhjo0720/123</link><description><![CDATA[<img src="https://blogthumb.pstatic.net/test.jpg">]]></description></item></rss>');
  }
  assert.equal(hostname, 'blogthumb.pstatic.net');
  return new Response(image);
 });
 await syncBlog(root);
 const posts = JSON.parse(await readFile(join(root, 'blog-posts.json'), 'utf8'));
 assert.equal(posts.length, 1);
 assert.equal(posts[0].image, 'assets/blog-thumb-123.jpg');
 assert.deepEqual(await readFile(join(root, 'public', posts[0].image)), Buffer.from(image));
});

test('new posts accept Naver relative dates and prefer exact RSS Korean dates',()=>{
 const dates=parseRssDates('<rss><item><link>https://blog.naver.com/yhjo0720/123</link><pubDate>Sun, 22 Nov 2026 23:30:00 GMT</pubDate></item></rss>');
 const pages=[{resultCode:'S',totalCount:1,postList:[{...post('123'),addDate:'21시간 전'}]}];
 assert.equal(normalizeCatalog(pages,dates)[0].date,'2026.11.23');
 assert.equal(normalizeCatalog(pages)[0].date,'21시간 전');
 for(const label of ['5분 전','방금 전','어제']) {
  pages[0].postList[0].addDate=label;assert.equal(normalizeCatalog(pages)[0].date,label);
 }
 pages[0].postList[0].addDate='unexpected response';assert.throws(()=>normalizeCatalog(pages),/Invalid/);
});
