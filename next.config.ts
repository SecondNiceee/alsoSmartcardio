import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode : false,
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
  /* config options here */
};

export default nextConfig;
