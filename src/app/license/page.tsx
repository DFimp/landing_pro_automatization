import type { Metadata } from "next";
import License from "@/page/License";

export const metadata: Metadata = {
  title: "Лицензии amoCRM c бонусами",
  description: "Продлите лицензию amoCRM через Про Автоматизацию и получите бесплатные виджеты, диагностику процессов, персонального менеджера и до 7 месяцев использования в подарок. Выгодные условия продления.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets",
  },
  
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pro-automatization.ru/widgets",
    title: "Лицензии amoCRM c бонусами",
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
};

export default function Page() {
  return <License />;
}
