import type { Metadata } from "next";

export const ROOT_LAYOUT_METADATA: Metadata = {
  metadataBase: new URL('https://pro-automatization.ru'),

  title: {
    default: "Про Автоматизацию — интеграция и автоматизация amoCRM",
    template: "%s | Про Автоматизацию"
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '108x108' },
      { url: '/icon-192.webp', sizes: '192x192', type: 'image/webp' },
      { url: '/icon-512.webp', sizes: '512x512', type: 'image/webp' },
    ],
    apple: '/apple-icon.webp',
  },

  other: {
    "yandex-verification": "f5d8de67e31c5b38",
  },

  authors: [{ name: "Про Автоматизацию" }],
  creator: "Про Автоматизацию",
  publisher: "Про Автоматизацию",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const PRIVACY_PAGE_METADATA: Metadata = {
  title: "Политика конфиденциальности",
  robots: {
    index: false,
    follow: true,
  },
};

export const NOT_FOUND_PAGE_METADATA: Metadata = {
  title: "Страница не найдена",
  description:
    "Запрошенная страница не существует или была перемещена. Перейдите на главную или откройте каталог виджетов.",
};
