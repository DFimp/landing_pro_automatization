import type { Metadata } from "next";
import QuickAmoCrmSetupArticle from "@/page/Article/QuickAmoCrmSetup";

export const metadata: Metadata = {
    title: "Быстрая настройка amoCRM: чеклист для новичков за 1 день",
    description:
        "Пошаговый чеклист быстрой настройки amoCRM для новичков: воронка продаж, источники заявок, автоматизация, задачи и аналитика без лишних ошибок.",
};

export default function Page() {
    return <QuickAmoCrmSetupArticle />;
}
