import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '172.16.40.147',
    '172.16.40.147:3000',
    'localhost:3000',
  ],
};

export default nextConfig;
