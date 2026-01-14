import type { Metadata } from "next";
import Home from "@/page/Home";


export const metadata: Metadata = {
  title: "Про Автоматизацию — разработка виджетов и автоматизация amoCRM",
  description: "Эксперт по amoCRM: разработка кастомных виджетов, настройка воронок продаж, интеграции с 1С, WhatsApp, телефонией. Автоматизация бизнес-процессов под ключ.",

  keywords: [
    "про автоматизацию",
    "про автоматизация amocrm",
    "pro-automatization",
    "разработка виджетов amocrm",
    "виджеты для amocrm",
    "автоматизация amocrm",
    "интеграция amocrm",
    "настройка amocrm",
    "внедрение amocrm",
    "роботы amocrm",
    "триггеры amocrm",
  ],

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pro-automatization.ru/",
    title: "Про Автоматизацию — разработка виджетов и автоматизация amoCRM",
    description: "Эксперт по amoCRM: кастомные виджеты, автоматизация продаж, интеграции. Внедрение и настройка CRM под ключ.",
    siteName: "Про Автоматизацию",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Про Автоматизацию - разработка виджетов и автоматизация amoCRM"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Про Автоматизацию — разработка виджетов amoCRM",
    description: "Кастомные виджеты, автоматизация продаж, интеграции с amoCRM",
    images: ["https://pro-automatization.ru/og-image.png"],
  },

  alternates: {
    canonical: "https://pro-automatization.ru/",
  },
};

export default function Page() {
  return <Home />;
}
