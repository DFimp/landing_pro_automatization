import type { Metadata } from "next";
import ArticlesPage from "@/page/Article/ArticlesPage/index";

export const metadata: Metadata = {
  title: "Статьи по amoCRM и автоматизации — Про Автоматизацию",
  description:
    "Экспертные статьи по amoCRM: работа с дублями сделок и контактов, автоматизация продаж, повышение эффективности менеджеров и порядок в CRM.",
  alternates: {
    canonical: "https://pro-automatization.ru/articles",
  },
  openGraph: {
    title: "Статьи по amoCRM и автоматизации — Про Автоматизацию",
    description:
      "Практические статьи и кейсы по автоматизации amoCRM, виджетам и оптимизации работы отдела продаж.",
    url: "https://pro-automatization.ru/articles",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Статьи по amoCRM — Про Автоматизацию",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Статьи по amoCRM и автоматизации",
    description: "Полезные статьи по amoCRM и автоматизации продаж",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default function Page() {
  return <ArticlesPage />;
}
