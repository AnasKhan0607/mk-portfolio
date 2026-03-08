import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/mk-portfolio' : '',
  assetPrefix: isProd ? '/mk-portfolio/' : '',
};

export default nextConfig;
