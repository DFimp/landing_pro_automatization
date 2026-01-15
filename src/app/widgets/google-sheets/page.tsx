import type { Metadata } from "next";
import Googleheets from "@/page/Widget/GoogleSheets";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Google Таблицы для amoCRM — синхронизация данных",
  description: "Виджет экспортирует данные из amoCRM в Google Таблицы. Автообновление, гибкие настройки, отчеты в реальном времени. От 1990₽.",
  keywords: [
    'google таблицы amocrm',
    'экспорт amocrm google sheets',
    'синхронизация amocrm google',
    'интеграция google sheets amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/google-sheets",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Googleheets  searchParams={params}  />
}