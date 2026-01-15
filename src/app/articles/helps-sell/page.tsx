import type { Metadata } from "next";
import AmoCrmHelpsSellArticle from "@/page/Article/AmoCrmHelpsSell/index";
import { createSEOMetadata } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "amoCRM: почему эта CRM помогает бизнесу продавать больше",
  description: "Разбираем, чем amoCRM помогает бизнесу: воронка продаж, автоматизация, интеграции, ошибки внедрения и роль интегратора. Читать 10 минут.",
  keywords: [
    "amocrm для бизнеса",
    "crm для продаж",
    "воронка продаж amocrm",
    "внедрение amocrm",
    "автоматизация продаж",
  ],
  canonical: "/articles/helps-sell",
  ogType: "article",
  publishedTime: "2025-11-15T00:00:00Z",
  modifiedTime: "2026-01-15T00:00:00Z",
});

export default function Page() {
  return <AmoCrmHelpsSellArticle />;
}
