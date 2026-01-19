import type { Metadata } from "next";
import Home from "@/page/Home";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Про Автоматизацию — интеграция и автоматизация amoCRM",
  description: "Ваш эксперт по amoCRM: настройка, интеграции, автоматизация бизнес-процессов. Консультации по amoCRM, воронки продаж, CRM-системы. Полная автоматизация вашего бизнеса с amoCRM.",
  keywords: [
    ...CORE_KEYWORDS.brand,
    ...CORE_KEYWORDS.widgets.slice(0, 3),
    ...CORE_KEYWORDS.automation.slice(0, 2),
  ],
  canonical: "/",
  ogType: "website",
});

export default function Page() {
  return <Home />;
}
