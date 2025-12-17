import type { Metadata } from "next";
import DeleteNotesBan from "@/page/Widget/DeleteNotesBan";

export const metadata: Metadata = {
    title: "Запрет удаления и редактирования примечаний в amoCRM",
    description:
        "Виджет запрещает удаление и изменение примечаний в amoCRM для выбранных менеджеров. Сохраните историю договорённостей, комментариев и коммуникаций с клиентами.",

    alternates: {
        canonical: "https://pro-automatization.ru/widgets/delete-notes-ban",
    },

    openGraph: {
        title: "Контроль над примечаниями в amoCRM",
        description:
            "Запретите удаление и редактирование примечаний для менеджеров и защитите историю коммуникаций с клиентами в amoCRM.",
        url: "https://pro-automatization.ru/widgets/delete-notes-ban",
        type: "website",
        images: [
            {
                url: "https://pro-automatization.ru/og-image.png",
                width: 1200,
                height: 630,
                alt: "Запрет удаления примечаний в amoCRM — Про Автоматизацию",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Запрет удаления примечаний в amoCRM",
        description:
            "Сохраните комментарии и договорённости с клиентами — запретите удаление и редактирование примечаний в amoCRM.",
        images: ["https://pro-automatization.ru/og-image.png"],
    },
};

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <DeleteNotesBan searchParams={params} />;
}
