export const githubPagesBasePath = "/fitting";
const onVercel = process.env.SITE_ON_VERCEL === "1";
const basePath = onVercel ? "" : githubPagesBasePath;
const siteOrigin = onVercel
  ? "https://fitting-cyan.vercel.app"
  : "https://brgolf.github.io";

export function sitePath(path: string): string {
  const route =
    onVercel || process.env.NODE_ENV === "development"
      ? path.replace(/^index\.html(?=#|$)/, "").replace(/\.html(?=#|$)/, "")
      : path;
  return basePath + "/" + route;
}

export const reservationReturnUrl =
  siteOrigin + sitePath("reservation-sent.html");
