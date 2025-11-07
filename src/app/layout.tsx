import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer";
import { Suspense } from "react";
import { YandexMetrika, YandexScript } from "@/shared/scripts/YandexMetrika";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "Про Автоматизацию",
    template: "%s | Про Автоматизацию"
  },
  description: "Ваш эксперт по amoCRM: настройка, интеграции, автоматизация бизнес-процессов. Консультации по amoCRM, воронки продаж, CRM-системы. Полная автоматизация вашего бизнеса с amoCRM.",
  other: {
    "yandex-verification": "f5d8de67e31c5b38",
  },
  keywords: [
    "amocrm", 
    "амо срм", 
    "настройка amocrm", 
    "интеграция amocrm", 
    "автоматизация бизнеса", 
    "crm системы", 
    "воронки продаж", 
    "настройка crm", 
    "консультант amocrm",
    "эксперт amocrm",
    "внедрение amocrm",
    "обучение amocrm"
  ],
  authors: [{ name: "Про Автоматизацию" }],
  creator: "Про Автоматизацию",
  publisher: "Про Автоматизацию",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pro-automatization.ru/",
    title: "Про Автоматизацию - Эксперт по amoCRM и автоматизации бизнеса",
    description: "Настройка amoCRM, интеграции, автоматизация. Консультации и полное внедрение CRM-системы для вашего бизнеса.",
    siteName: "Про Автоматизацию",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Про Автоматизацию - эксперт по amoCRM"
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Про Автоматизацию - Эксперт по amoCRM",
    description: "Настройка amoCRM, интеграции, автоматизация бизнес-процессов",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
  
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

  alternates: {
    canonical: "https://pro-automatization.ru/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} antialiased`}>
        <YandexScript />
        <Suspense fallback={<></>}>
          <YandexMetrika />
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
