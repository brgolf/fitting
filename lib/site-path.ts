export const siteBasePath = "/fitting";

export function sitePath(path: string): string {
  // GitHub Pages serves these exported files at their original .html URLs.
  const localPath =
    process.env.NODE_ENV === "development"
      ? path.replace(/^index\.html(?=#|$)/, "").replace(/\.html(?=#|$)/, "")
      : path;
  return siteBasePath + "/" + localPath;
}
