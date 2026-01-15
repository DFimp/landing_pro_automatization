import type { Metadata } from "next";
import DeleteNotesBan from "@/page/Widget/DeleteNotesBan";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
    title: "Запрет удаления примечаний в amoCRM — защита данных",
    description: "Виджет запрещает удаление примечаний для выбранных ролей. Сохранность истории, контроль действий. От 490₽.",
    keywords: [
        'запрет удаления примечаний amocrm',
        'защита примечаний amocrm',
        'контроль удаления amocrm',
        'права доступа amocrm',
        ...CORE_KEYWORDS.widgets,
    ],
    canonical: "/widgets/delete-notes-ban",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <DeleteNotesBan searchParams={params} />;
}
