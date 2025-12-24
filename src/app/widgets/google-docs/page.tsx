import type { Metadata } from "next";
import GoogleDocs from "@/page/Widget/GoogleDocs";

export const metadata: Metadata = {
  title: "ProAutomatization amoCRM for Google Docs - Генерация документов из amoCRM",
  description: "Виджет для автоматической генерации документов в Google Документы на основе данных из amoCRM. Договоры, КП, акты по шаблонам в один клик.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/googledocs",
  },

  openGraph: {
    title: "ProAutomatization amoCRM for Google Docs",
    description: "Автоматическая генерация документов в Google Docs на основе данных из amoCRM. Договоры, КП, акты по шаблонам.",
    url: "https://pro-automatization.ru/googledocs",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProAutomatization amoCRM for Google Docs"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ProAutomatization amoCRM for Google Docs",
    description: "Автоматическая генерация документов в Google Docs на основе данных из amoCRM",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <GoogleDocs searchParams={params} />;
}