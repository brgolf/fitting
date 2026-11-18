import type { NextConfig } from "next";
import { siteBasePath } from "./lib/site-path";

const config: NextConfig = {
  basePath: siteBasePath,
  output: "export",
  skipTrailingSlashRedirect: true,
};

export default config;
