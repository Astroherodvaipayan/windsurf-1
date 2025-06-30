import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ico$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[name][ext]'
      }
    });
    return config;
  }
};

export default nextConfig;
