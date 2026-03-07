import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mk-portfolio',
  assetPrefix: '/mk-portfolio/',
};

export default nextConfig;
