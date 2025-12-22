import type { Metadata } from "next";
import Googleheets from "@/page/Widget/GoogleSheets"; 

export const metadata: Metadata = {
  title: "ProAutomatization amoCRM for Googlesheets - Выгрузка данных из amoCRM",
  description: "Виджет для автоматической выгрузки сделок, контактов и компаний из amoCRM в Google Таблицы и Google Документы. Синхронизация данных, автоматическое форматирование.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/googlesheets",
  },

  openGraph: {
    title: "ProAutomatization amoCRM for Googlesheets",
    description: "Автоматическая выгрузка данных из amoCRM в Google Таблицы и Google Документы. Отчёты, аналитика, генерация документов.",
    url: "https://pro-automatization.ru/googlesheets",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProAutomatization amoCRM for Googlesheets"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ProAutomatization amoCRM for Googlesheets",
    description: "Автоматическая выгрузка данных из amoCRM в Google Таблицы и Google Документы",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Googleheets  searchParams={params}  />
}