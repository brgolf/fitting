import { sitePath } from "@/lib/site-path";

export function PageStyles({
  navigation,
  planning,
}: {
  navigation?: boolean;
  planning?: boolean;
}) {
  return (
    <>
      <link rel="stylesheet" href={sitePath("style.css")} precedence="site" />
      {navigation && (
        <link
          rel="stylesheet"
          href={sitePath("navigation.css")}
          precedence="site"
        />
      )}
      <link rel="stylesheet" href={sitePath("premium.css")} precedence="site" />
      {planning && (
        <link
          rel="stylesheet"
          href={sitePath("planning.css")}
          precedence="site"
        />
      )}
      <link
        rel="stylesheet"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        precedence="site"
      />
      <link rel="stylesheet" href={sitePath("brand.css")} precedence="site" />
    </>
  );
}
