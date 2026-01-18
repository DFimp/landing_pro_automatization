import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer";
import { Suspense } from "react";
import { YandexMetrika, YandexScript } from "@/shared/scripts/YandexMetrika";
import { GoogleAnalytics, GoogleAnalyticsScript } from "@/shared/scripts/GoogleAnalytics";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pro-automatization.ru'),

  title: {
    default: "Про Автоматизацию — интеграция и автоматизация amoCRM",
    template: "%s | Про Автоматизацию"
  },

  description: "Эксперт по amoCRM: разработка виджетов, автоматизация бизнес-процессов, интеграции. Настройка CRM под ключ, консультации и внедрение amoCRM для вашего бизнеса.",

  keywords: [
    "про автоматизацию",
    "amoCRM",
    "amocrm",
    "amo crm",
    "автоматизация amoCRM",
    "виджеты amoCRM",
    "интеграция amoCRM",
    "настройка amoCRM",
    "внедрение CRM",
  ],

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

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Про Автоматизацию',
  },
};

export const revalidate = 86400;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} antialiased`}>
        <YandexScript />
        <GoogleAnalyticsScript />
        <Suspense fallback={<></>}>
          <YandexMetrika />
          <GoogleAnalytics />
        </Suspense>
        <Suspense fallback={<div className="h-20" />}>
          <Header />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
