import type { Metadata } from "next";
import ShiftSelect from "@/page/Widget/ShiftSelect";

export const metadata: Metadata = {
    title: "Групповое выделение сделок и контактов в amoCRM (Shift-выбор)",
    description:
        "Виджет добавляет удобное групповое выделение чекбоксов по Shift и протягиванием мышью в списках amoCRM. Ускорьте массовое редактирование сделок, контактов и компаний и работу с группами сущностей.",

    alternates: {
        canonical: "https://pro-automatization.ru/widgets/shift-select",
    },

    openGraph: {
        title: "Групповое выделение (Shift-выбор) в списках amoCRM",
        description:
            "Быстро выделяйте группы сделок, контактов и компаний с помощью Shift и протягивания мышью. Ускорьте массовое изменение ответственных, статусов и других параметров в amoCRM.",
        url: "https://pro-automatization.ru/widgets/shift-select",
        type: "website",
        images: [
            {
                url: "https://pro-automatization.ru/og-image.png",
                width: 1200,
                height: 630,
                alt: "Групповое выделение (Shift-выбор) в amoCRM - Про Автоматизацию",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Shift-выбор и групповое выделение в списках amoCRM",
        description:
            "Выделяйте множество сущностей в списках amoCRM с помощью Shift и протягивания мышью. Идеально для массовых операций и ускорения работы отдела продаж.",
        images: ["https://pro-automatization.ru/og-image.png"],
    },
};

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <ShiftSelect searchParams={params} />;
}
