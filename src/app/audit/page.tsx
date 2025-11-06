import type { Metadata } from "next";
import Audit from "@/page/Audit";

export const metadata: Metadata = {
  title: "Аудит amoCRM",
  description: "Комплексный аудит amoCRM и предпроектная подготовка. Анализируем текущее состояние CRM, выявляем проблемы, разрабатываем решения для автоматизации без рисков и лишних затрат.",
  keywords: [
    "аудит amocrm",
    "аудит амо срм", 
    "анализ amocrm",
    "предпроектная подготовка amocrm",
    "диагностика crm",
    "оценка amocrm",
    "аналитика amocrm",
    "проверка настроек amocrm",
    "консультация amocrm",
    "экспертиза crm системы",
    "audit amocrm",
    "crm аудит",
    "оптимизация amocrm"
  ],

  openGraph: {
    title: "Аудит amoCRM - Профессиональный анализ вашей CRM системы",
    description: "Комплексный аудит amoCRM: анализ настроек, выявление проблем, оптимизация процессов. Начните автоматизацию с надёжного фундамента.",
    url: "https://pro-automatization.ru/audit",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Аудит amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Аудит amoCRM - Профессиональный анализ CRM",
    description: "Комплексный аудит amoCRM: анализ настроек, выявление проблем, предпроектная подготовка",
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
    canonical: "https://pro-automatization.ru/audit",
  },
};

export default function Page() {
  return <Audit />;
}
