import type { Metadata } from "next";
import Home from "@/page/Home";


export const metadata: Metadata = {
  title: "Про Автоматизацию — интеграция и автоматизация amoCRM",
  description: "Ваш эксперт по amoCRM: настройка, интеграции, автоматизация бизнес-процессов. Консультации по amoCRM, воронки продаж, CRM-системы. Полная автоматизация вашего бизнеса с amoCRM.",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pro-automatization.ru/",
    title: "Про Автоматизацию — интеграция и автоматизация amoCRM",
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
  
  alternates: {
    canonical: "https://pro-automatization.ru/",
  },
};

export default function Page() {
  return <Home />;
}
