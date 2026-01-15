import type { Metadata } from "next";
import MassiveLeads from "@/page/Widget/MassiveLeads";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Массовое создание сделок в amoCRM — быстрая загрузка",
  description: "Виджет позволяет создавать сотни сделок за минуту. Импорт из Excel, массовые операции, экономия времени. От 1490₽.",
  keywords: [
    'массовое создание сделок amocrm',
    'импорт сделок amocrm',
    'загрузка сделок amocrm',
    'массовые операции amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/massive-leads",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <MassiveLeads searchParams={params} />;
}
