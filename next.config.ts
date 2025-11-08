import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true, // 🚫 не падать при ошибках линтера
  },
  env: {
    API_URL: process.env.API_URL,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|ico|css|js|woff|woff2|ttf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate', // 1 день
          },
        ],
      },
    ]
  },
  
  /* config options here */
};

export default nextConfig;
