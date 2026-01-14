import type { Metadata } from "next";
import DuplicateLeads from "@/page/Widget/DuplicateLeads";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Дубли сделок для amoCRM — автоматическое объединение | Про Автоматизацию",
  description: "Виджет автоматически находит и объединяет дубли сделок в amoCRM. Гибкие настройки приоритетов, работа с воронками. От 1990₽.",
  keywords: [
    "дубли сделок amocrm",
    "объединение дублей amocrm",
    "склеивание сделок amocrm",
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/duplicate-leads",
  ogType: "website",
});
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateLeads searchParams={params} />;
}
