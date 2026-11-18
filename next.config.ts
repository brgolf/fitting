import type { NextConfig } from "next";
import { githubPagesBasePath } from "./lib/site-path";

const onVercel = process.env.VERCEL === "1";

const config: NextConfig = {
  env: { SITE_ON_VERCEL: onVercel ? "1" : "0" },
  basePath: onVercel ? "" : githubPagesBasePath,
  output: onVercel ? undefined : "export",
  skipTrailingSlashRedirect: true,
};

export default config;
