import type { Metadata } from "next";
import QuickAmoCrmSetupArticle from "@/page/Article/QuickAmoCrmSetup";
import { createSEOMetadata } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
    title: "Быстрая настройка amoCRM — чеклист для новичков за 1 день",
    description: "Пошаговый чеклист настройки amoCRM: воронка продаж, источники заявок, автоматизация, задачи и аналитика без ошибок. Читать 12 минут.",
    keywords: [
        "настройка amocrm",
        "настройка amocrm с нуля",
        "как настроить amocrm",
        "чеклист настройки amocrm",
        "воронка продаж amocrm",
    ],
    canonical: "/articles/quick-setup",
    ogType: "article",
    publishedTime: "2025-12-01T00:00:00Z",
    modifiedTime: "2026-01-15T00:00:00Z",
});

export default function Page() {
    return <QuickAmoCrmSetupArticle />;
}
