import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
