import type { Metadata } from "next";
import TransferFields from "@/page/Widget/TransferFields";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
    title: "Перенос полей в amoCRM — копирование данных между сущностями",
    description: "Виджет переносит данные между сделками, контактами, компаниями. Автоматизация заполнения, экономия времени. От 990₽.",
    keywords: [
        'перенос полей amocrm',
        'копирование данных amocrm',
        'перенос данных amocrm',
        'автозаполнение amocrm',
        ...CORE_KEYWORDS.widgets,
    ],
    canonical: "/widgets/transfer-fields",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <TransferFields searchParams={params} />;
}
