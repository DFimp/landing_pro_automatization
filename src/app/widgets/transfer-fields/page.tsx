import type { Metadata } from "next";
import TransferFields from "@/page/Widget/TransferFields";

export const metadata: Metadata = {
    title: "Перенос длинных названий полей в amoCRM — без обрезки и наложений",
    description:
        "Виджет автоматически переносит длинные названия пользовательских полей в карточках amoCRM. Полный текст отображается без многоточий, переносится на новые строки и не накладывается на другие элементы.",

    alternates: {
        canonical: "https://pro-automatization.ru/widgets/transfer-fields",
    },

    openGraph: {
        title: "Перенос длинных названий полей в amoCRM",
        description:
            "Избавьтесь от обрезанных заголовков и некрасивых наложений в карточках amoCRM. Виджет автоматически переносит длинные названия полей и делает интерфейс аккуратным и читаемым.",
        url: "https://pro-automatization.ru/widgets/transfer-fields",
        type: "website",
        images: [
            {
                url: "https://pro-automatization.ru/og-image.png",
                width: 1200,
                height: 630,
                alt: "Перенос длинных названий полей в amoCRM — Про Автоматизацию",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Перенос длинных названий полей в amoCRM",
        description:
            "Автоматический перенос названий полей в карточках amoCRM. Виджет убирает многоточия, предотвращает наложение строк и улучшает читаемость интерфейса.",
        images: ["https://pro-automatization.ru/og-image.png"],
    },
};

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <TransferFields searchParams={params} />;
}
