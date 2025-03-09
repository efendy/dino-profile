import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
