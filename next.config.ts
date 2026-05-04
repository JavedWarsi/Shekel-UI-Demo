import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
