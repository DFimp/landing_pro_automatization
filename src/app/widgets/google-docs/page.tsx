import type { Metadata } from "next";
import GoogleDocs from "@/page/Widget/GoogleDocs";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Google Документы для amoCRM — автогенерация договоров",
  description: "Виджет автоматически создает документы из шаблонов Google Docs. Договоры, счета, акты за секунду. От 1990₽.",
  keywords: [
    'google документы amocrm',
    'автогенерация документов amocrm',
    'шаблоны google docs amocrm',
    'создание договоров amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/google-docs",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <GoogleDocs searchParams={params} />;
}