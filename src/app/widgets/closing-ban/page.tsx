import type { Metadata } from "next";
import СlosingBan from "@/page/Widget/СlosingBan";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Запрет закрытия сделок в amoCRM — контроль качества",
  description: "Виджет блокирует закрытие сделок при невыполнении условий. Обязательные поля, контроль процесса. От 990₽.",
  keywords: [
    'запрет закрытия сделок amocrm',
    'блокировка закрытия amocrm',
    'контроль сделок amocrm',
    'обязательные поля amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/closing-ban",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <СlosingBan searchParams={params} />;
}
