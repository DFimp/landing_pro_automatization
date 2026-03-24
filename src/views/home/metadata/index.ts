import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title: "Про Автоматизацию — внедрение и автоматизация amoCRM для бизнеса",
  description:
    "Официальный партнёр amoCRM. Внедрение с нуля, настройка воронок, интеграции и автоматизация продаж. Разрабатываем собственные виджеты. Бесплатная консультация — покажем, где теряются ваши лиды.",
  canonical: "/",
  ogType: "website",
});
