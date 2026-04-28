import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title: "Виджеты для amoCRM — готовые решения",
  description:
    "23 собственных виджета для amoCRM: Telegram-уведомления, распределение сделок, объединение дублей, Google Docs, Счета Т-Банк, контроль задач и подсветка полей. Установка за 1 клик.",
  canonical: "/widgets",
  ogType: "website",
});
