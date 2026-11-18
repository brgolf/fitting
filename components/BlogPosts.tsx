import posts from "@/blog-posts.json";
import { sitePath } from "@/lib/site-path";

export function BlogPosts() {
  return (
    <div className="blog-post-list">
      {posts.map(({ title, url, date, image }) => (
        <a
          key={url}
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
  );
}
