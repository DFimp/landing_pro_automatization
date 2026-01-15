import type { Metadata } from "next";
import AutoTask from "@/page/Widget/AutoTask";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Автозадачи в amoCRM — автоматический контроль сделок",
  description: "Виджет автоматически создает задачи для сделок без активности в amoCRM. Увеличьте конверсию на 35%. Настройка за 5 минут. От 990₽.",
  keywords: [
    'автозадачи amocrm',
    'автоматические задачи amocrm',
    'контроль сделок amocrm',
    'напоминания amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/auto-tasks",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <AutoTask searchParams={params} />;
}
