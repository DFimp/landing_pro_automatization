import type { Metadata } from "next";
import DuplicateContacts from "@/page/Widget/DuplicateContacts";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Дубли контактов для amoCRM — автоматическое объединение",
  description: "Виджет находит и объединяет дублированные контакты в amoCRM. Умные алгоритмы поиска, сохранение данных. От 1990₽.",
  keywords: [
    'дубли контактов amocrm',
    'объединение контактов amocrm',
    'склеивание контактов amocrm',
    'поиск дублей amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/duplicate-contacts",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateContacts searchParams={params} />;
}
