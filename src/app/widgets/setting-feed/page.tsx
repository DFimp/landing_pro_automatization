import type { Metadata } from "next";
import FeedFilter from "@/page/Widget/SettingsFeed";

export const metadata: Metadata = {
    title: "Фильтр ленты событий в сделке amoCRM — задачи, звонки, письма",
    description:
        "Виджет для фильтрации ленты событий в сделке amoCRM. Быстро переключайтесь между задачами, примечаниями, письмами, звонками и чатами. Скрытие пустых дат и автоприменение при догрузке.",

    alternates: {
        canonical: "https://pro-automatization.ru/widgets/settings-feed",
    },

    openGraph: {
        title: "Фильтр ленты событий в сделке amoCRM",
        description:
            "Смотрите только нужные события в сделке: задачи, звонки, письма или чаты. Без лишнего шума, с автоматической догрузкой и скрытием пустых дат.",
        url: "https://pro-automatization.ru/widgets/settings-feed",
        type: "website",
        images: [
            {
                url: "https://pro-automatization.ru/og-image.png",
                width: 1200,
                height: 630,
                alt: "Фильтр ленты событий в amoCRM — Про Автоматизацию",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Фильтр ленты событий в amoCRM",
        description:
            "Фильтрация ленты сделки по типам событий: задачи, звонки, письма, чаты. Ускорьте работу менеджеров в amoCRM.",
        images: ["https://pro-automatization.ru/og-image.png"],
    },
};

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <FeedFilter searchParams={params} />;
}
