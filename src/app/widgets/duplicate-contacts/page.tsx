import type { Metadata } from "next";
import DuplicateContacts from "@/page/Widget/DuplicateContacts";

export const metadata: Metadata = {
  title: "Дубли контактов (объединение дублей контактов) в amoCRM",
  description: "Виджет автоматически находит и объединяет дубли контактов в amoCRM по телефону, email и другим полям. Гибкие настройки, система исключений, сохранение всех данных.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/duplicate-contacts",
  },

  openGraph: {
    title: "Избавьтесь от дублей контактов в amoCRM за 5 минут",
    description: "Автоматическое склеивание дублированных контактов с умными алгоритмами поиска. Экономьте время менеджеров и улучшайте качество базы.",
    url: "https://pro-automatization.ru/widgets/duplicate-contacts",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Объединение дублей контактов для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Объединение дублей контактов в amoCRM - чистая база за 5 минут",
    description: "Автоматическое склеивание дублей по телефону, email и другим полям. Гибкие настройки и умные алгоритмы.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateContacts searchParams={params} />;
}
