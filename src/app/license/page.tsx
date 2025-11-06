import type { Metadata } from "next";
import License from "@/page/License";

export const metadata: Metadata = {
  title: "Лицензии amoCRM c бонусами",
  description: "Продлите лицензию amoCRM через Про Автоматизацию и получите бесплатные виджеты, диагностику процессов, персонального менеджера и до 7 месяцев использования в подарок. Выгодные условия продления.",
  keywords: [
    "продление amocrm",
    "лицензия amocrm",
    "виджеты amocrm бесплатно",
    "продлить amocrm",
    "поддержка amocrm",
    "бонусы amocrm",
    "диагностика amocrm",
    "персональный менеджер amocrm",
    "выгодное продление crm",
    "бесплатные месяцы amocrm",
  ],
  
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pro-automatization.ru/widgets",
    title: "Продление amoCRM с бонусами: виджеты бесплатно + до 7 месяцев в подарок",
    description: "Продлевайте amoCRM выгодно: бесплатные виджеты, диагностика процессов, персональная поддержка и бонусные месяцы использования. Специальные условия от Про Автоматизацию.",
    siteName: "Про Автоматизацию",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Лицензии amoCRM c бонусами"
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Продление amoCRM с бонусами и виджетами бесплатно",
    description: "Получите бесплатные виджеты, диагностику и до 7 месяцев в подарок при продлении лицензии amoCRM",
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
    canonical: "https://pro-automatization.ru/widgets",
  },
};

export default function Page() {
  return <License />;
}
