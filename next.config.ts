import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚫 не падать при ошибках линтера
  },
  env: {
    API_URL: process.env.API_URL,
  },
  /* config options here */
};

export default nextConfig;
