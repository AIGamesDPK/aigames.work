import type { NextConfig } from "next";
import type { ImageLoaderProps } from "next/image";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png)$/i,
      use: [
        {
          loader: 'sharp-loader',
          options: {
            preserveAlpha: true,
            quality: 100,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
