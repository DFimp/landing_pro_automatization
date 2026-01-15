import type { Metadata } from "next";
import GroupFields from "@/page/Widget/GroupFields";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
    title: "Группировка полей в amoCRM — удобная организация",
    description: "Виджет группирует поля в карточках для удобства. Скрытие блоков, улучшенный интерфейс, повышение продуктивности. От 990₽.",
    keywords: [
        'группировка полей amocrm',
        'организация полей amocrm',
        'настройка карточек amocrm',
        'интерфейс amocrm',
        ...CORE_KEYWORDS.widgets,
    ],
    canonical: "/widgets/group-fields",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <GroupFields searchParams={params} />;
}
