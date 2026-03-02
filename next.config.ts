import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true, // не падать при ошибках линтера
  },
  env: {
    API_URL: process.env.API_URL,
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*', // js/css чанки с хэшем — кешируем навсегда
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/((?!_next/static|_next/image).*)', // html — всегда свежий
        headers: [{ key: 'Cache-Control', value: 'no-cache, must-revalidate' }],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|ico|woff|woff2|ttf)', // картинки/шрифты — 7 дней
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, must-revalidate' }],
      },
    ]
  },
  
};

export default nextConfig;
