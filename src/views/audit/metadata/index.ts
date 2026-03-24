import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title:
    "Аудит amoCRM — профессиональная проверка настройки | Про Автоматизацию",
  description:
    "Полный аудит настройки amoCRM: воронки, интеграции, автоматизация. Выявим ошибки и дадим рекомендации. От 15 000₽.",
  canonical: "/audit",
  ogType: "website",
});
