import type { Metadata } from "next";
import ShiftSelect from "@/page/Widget/ShiftSelect";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
    title: "Множественный выбор в amoCRM — быстрые массовые операции",
    description: "Виджет добавляет множественный выбор через Shift. Ускорение массовых операций в 10 раз. От 490₽.",
    keywords: [
        'множественный выбор amocrm',
        'массовый выбор amocrm',
        'shift выбор amocrm',
        'быстрые операции amocrm',
        ...CORE_KEYWORDS.widgets,
    ],
    canonical: "/widgets/shift-select",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <ShiftSelect searchParams={params} />;
}
