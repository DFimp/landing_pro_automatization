import type { Metadata } from "next";
import DuplicateLeads from "@/page/Widget/DuplicateLeads";

export const metadata: Metadata = {
  title: "Дубли сделок (объединение дублей сделок) в amoCRM",
  description: "Виджет автоматически находит и объединяет дубли сделок в amoCRM с сохранением всех данных. Гибкие настройки приоритетов, работа с воронками, экономия времени менеджеров.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/duplicate-leads",
  },

  openGraph: {
    title: "Наведите порядок в сделках amoCRM за 5 минут",
    description: "Автоматическое склеивание дублированных сделок с сохранением всех важных данных. Экономьте время менеджеров и улучшайте качество базы.",
    url: "https://pro-automatization.ru/widgets/duplicate-leads",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Объединение дублей сделок для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Объединение дублей сделок в amoCRM - чистая воронка",
    description: "Автоматическое склеивание дублей сделок с умными алгоритмами. Гибкие настройки приоритетов и сохранение всех данных.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateLeads searchParams={params} />;
}
