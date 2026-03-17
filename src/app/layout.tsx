import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import Header from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer";
import { Analytics } from "@/shared/scripts/Analytics";
import ScrollRevealObserver from "@/shared/ui/scrollReveal/ScrollRevealObserver.client";
import {
  SiteNavigationSchemaTag,
  WebSiteSchemaTag,
  SITE_NAVIGATION
} from '@/shared/lib/seo';
import { WebVitals } from './web-vitals';

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

export const revalidate = 86400;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <WebSiteSchemaTag />
        <SiteNavigationSchemaTag items={SITE_NAVIGATION} />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <Analytics />
        <WebVitals />
        <ScrollRevealObserver />
        <Suspense fallback={null}>
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
