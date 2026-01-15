import type { Metadata } from "next";
import ArticleDuplicateLeads from "@/page/Article/DuplicateLeads";
import { createSEOMetadata } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Как работать с дублями сделок в amoCRM — 3 кейса на практике",
  description: "Разбираем на реальных кейсах, как правильно объединять дубли сделок в amoCRM. Не потерять клиентов, сэкономить время менеджеров. Читать 7 минут.",
  keywords: [
    "дубли сделок amocrm",
    "объединение дублей amocrm",
    "работа с дублями amocrm",
    "склеивание сделок amocrm",
    "кейсы amocrm",
  ],
  canonical: "/articles/duplicate-leads",
  ogType: "article",
  publishedTime: "2025-10-01T00:00:00Z",
  modifiedTime: "2026-01-15T00:00:00Z",
});

export default function Page() {
    return <ArticleDuplicateLeads />;
}
