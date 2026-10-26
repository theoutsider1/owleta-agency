import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/services/website-audit",
        has: [
          {
            type: "query",
            key: "service",
            value: "check",
          },
        ],
        destination: "/tools/website-checker#free-website-report",
        permanent: true,
      },
      {
        source: "/services/website-audit",
        has: [
          {
            type: "query",
            key: "service",
            value: "audit",
          },
        ],
        destination: "/services/website-audit#request",
        permanent: true,
      },
      {
        source: "/work/german-language-centre",
        destination: "/work",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
