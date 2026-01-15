import type { Metadata } from "next";
import FeedFilter from "@/page/Widget/SettingsFeed";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
    title: "Настройка ленты в amoCRM — кастомизация интерфейса",
    description: "Виджет позволяет настраивать отображение ленты событий. Фильтры, группировка, персонализация. От 490₽.",
    keywords: [
        'настройка ленты amocrm',
        'кастомизация ленты amocrm',
        'фильтры событий amocrm',
        'интерфейс ленты amocrm',
        ...CORE_KEYWORDS.widgets,
    ],
    canonical: "/widgets/setting-feed",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <FeedFilter searchParams={params} />;
}
