import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚫 не падать при ошибках линтера
  },
  /* config options here */
};

export default nextConfig;
