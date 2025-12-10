import type { Metadata } from "next";
import GroupFields from "@/page/Widget/GroupFields";

export const metadata: Metadata = {
    title: "Группировка полей в карточке сделки в amoCRM",
    description:
        "Виджет автоматически группирует поля в карточке сделки amoCRM по логическим блокам. Удобная структура, сворачиваемые группы и ускорение работы менеджеров.",

    alternates: {
        canonical: "https://pro-automatization.ru/widgets/group-fields",
    },

    openGraph: {
        title: "Наведите порядок в полях сделки amoCRM за 5 минут",
        description:
            "Группировка полей в карточке сделки: логические блоки, подгруппы, скрытие служебных полей и удобная навигация для менеджеров.",
        url: "https://pro-automatization.ru/widgets/group-fields",
        type: "website",
        images: [
            {
                url: "https://pro-automatization.ru/og-image.png",
                width: 1200,
                height: 630,
                alt: "Группировка полей в карточке сделки amoCRM - Про Автоматизацию",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Группировка полей в amoCRM — удобная карточка сделки",
        description:
            "Структурируйте поля в карточке сделки amoCRM по группам и подгруппам. Меньше прокрутки — больше фокуса на клиенте.",
        images: ["https://pro-automatization.ru/og-image.png"],
    },
};

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <GroupFields searchParams={params} />;
}
