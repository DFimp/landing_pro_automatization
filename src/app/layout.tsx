import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import Header from "@/sections/header/Header";
import { Footer } from "@/sections/footer";
import { Analytics } from "@/shared/scripts/Analytics";
import ScrollRevealObserver from "@/shared/ui/scrollReveal/ScrollRevealObserver.client";
import {
  SiteNavigationSchemaTag,
  WebSiteSchemaTag,
  SITE_NAVIGATION
} from '@/shared/lib/seo';
import { WebVitals } from './web-vitals';
import { ROOT_LAYOUT_METADATA } from "@/shared/constants/metadata";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = ROOT_LAYOUT_METADATA;

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
