import type { Metadata } from "next";
import DeleteTasksBan from "@/page/Widget/DeleteTasksBan";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Запрет удаления задач в amoCRM — контроль выполнения",
  description: "Виджет запрещает удаление задач для выбранных ролей. Дисциплина команды, контроль процессов. От 490₽.",
  keywords: [
    'запрет удаления задач amocrm',
    'защита задач amocrm',
    'контроль задач amocrm',
    'права доступа задачи amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/delete-tasks-ban",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DeleteTasksBan searchParams={params} />;
}
