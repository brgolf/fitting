"use client";
import { useState } from "react";
import posts from "@/blog-posts.json";
import { sitePath } from "@/lib/site-path";

export function BlogPosts() {
  const [visible, setVisible] = useState(12);
  return (
    <><div className="blog-post-list" id="journal-posts">
      {posts.map(({ title, url, date, image }, index) => (
        <a
          key={url}
          hidden={index >= visible}
          className="blog-post"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="blog-post-thumb"
            src={sitePath(image)}
            alt={title}
            width={112}
            height={84}
            loading="lazy"
            decoding="async"
          />
          <div className="blog-post-copy">
            <time>{date}</time>
            <h3>{title}</h3>
          </div>
          <span className="blog-post-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      ))}
    </div>
    {posts.length > 12 && <><p className="blog-count" role="status">전체 {posts.length}개 글 중 {Math.min(visible, posts.length)}개</p><button type="button" className="blog-more" aria-controls="journal-posts" aria-expanded={visible >= posts.length} onClick={() => setVisible(count => count >= posts.length ? 12 : Math.min(posts.length, count + 12))}>{visible >= posts.length ? '접기 −' : `글 ${Math.min(12, posts.length - visible)}개 더 보기 +`}</button></>}
    </>
  );
}
