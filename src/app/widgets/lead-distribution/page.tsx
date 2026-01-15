import type { Metadata } from "next";
import Distribution from "@/page/Widget/Distribution";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Распределение сделок в amoCRM — умная маршрутизация лидов",
  description: "Виджет автоматически распределяет сделки между менеджерами по правилам. Равномерная нагрузка, приоритеты, статистика. От 2990₽.",
  keywords: [
    'распределение сделок amocrm',
    'распределение лидов amocrm',
    'маршрутизация сделок amocrm',
    'автораспределение amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/lead-distribution",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Distribution searchParams={params} />;
}
