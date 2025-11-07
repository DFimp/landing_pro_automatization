import type { Metadata } from "next";
import ArticleDuplicateLeads from "@/page/Article/DuplicateLeads";

export const metadata: Metadata = {
  title: "Как работать с дублями сделок в amoCRM - 3 кейса на практике",
  description: "Разбираем на реальных кейсах, как правильно объединять дубли сделок в amoCRM. Узнайте, как не потерять клиентов, сэкономить время менеджеров и навести порядок в базе CRM.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/articles/duplicate-leads",
  },

  openGraph: {
    title: "Как работать с дублями сделок в amoCRM - 3 кейса на практике",
    description: "Практические кейсы по работе с дублями в amoCRM: как объединять контакты, сохранять повторные продажи и не терять клиентов. Реальные примеры настройки.",
    url: "https://pro-automatization.ru/articles/duplicate-leads",
    type: "article",
    publishedTime: "2025-10-01T00:00:00Z",
    authors: ["Про Автоматизацию"],
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Как работать с дублями в amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Как работать с дублями в amoCRM - 3 практических кейса",
    description: "Разбираем на реальных примерах, как правильно объединять дубли в amoCRM и не терять клиентов",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default function Page() {
    return <ArticleDuplicateLeads />;
}
