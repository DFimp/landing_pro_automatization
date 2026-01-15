import type { Metadata } from "next";
import TimeZone from "@/page/Widget/TimeZone";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Часовые пояса для amoCRM — учет времени клиентов",
  description: "Виджет показывает текущее время клиента с учетом часового пояса. Удобная работа с регионами, планирование звонков. От 490₽.",
  keywords: [
    'часовые пояса amocrm',
    'время клиента amocrm',
    'учет часовых поясов',
    'планирование звонков amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/time-zone",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TimeZone searchParams={params} />;
}
