import type { Metadata } from "next";
import Audit from "@/page/Audit";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Аудит amoCRM — профессиональная проверка настройки | Про Автоматизацию",
  description: "Полный аудит настройки amoCRM: воронки, интеграции, автоматизация. Выявим ошибки и дадим рекомендации. От 15 000₽.",
  keywords: ["аудит amocrm", "проверка настройки amocrm", "оптимизация amocrm", ...CORE_KEYWORDS.setup],
  canonical: "/audit",
  ogType: "website",
});

export default function Page() {
  return <Audit />;
}
