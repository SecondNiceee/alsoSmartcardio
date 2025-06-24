import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['./src'],
    logger: {
      warn: function(message: string) {
        console.warn(message);
      },
      debug: function(message: string) {
        console.log(message);
      }
    }
  },
  webpack: (config, { isServer }) => {
    // Отключаем fs на клиенте
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };
    }

    return config;
  }
};

export default nextConfig;