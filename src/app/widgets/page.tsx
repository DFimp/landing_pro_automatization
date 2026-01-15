import type { Metadata } from "next";
import WidgetsPage from "@/page/Widget/WidgetsPage";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Виджеты для amoCRM — готовые решения | Про Автоматизацию",
  description: "Готовые виджеты для amoCRM: Telegram уведомления, распределение лидов, объединение дублей, автозадачи, часовые пояса. От 490₽.",
  keywords: [
    ...CORE_KEYWORDS.widgets,
    "каталог виджетов amocrm",
    "готовые виджеты amocrm",
  ],
  canonical: "/widgets",
  ogType: "website",
});

export default function Page() {
  return <WidgetsPage />;
}
