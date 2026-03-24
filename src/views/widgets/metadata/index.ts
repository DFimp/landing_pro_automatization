import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title: "Виджеты для amoCRM — готовые решения | Про Автоматизацию",
  description:
    "22 собственных виджета для amoCRM: Telegram-уведомления, распределение сделок, объединение дублей, Google Docs, Счета Т-Банк, контроль задач. Установка за 1 клик.",
  canonical: "/widgets",
  ogType: "website",
});
