import type { NextConfig } from "next";
import { getPhotoCdnHostname } from "./lib/photo-url";

const cdnHostname = getPhotoCdnHostname();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: cdnHostname
      ? [
          {
            protocol: "https",
            hostname: cdnHostname,
            pathname: "/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
