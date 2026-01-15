import type { Metadata } from "next";
import TelegramWidget from "@/page/Widget/TelegramNotify";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Telegram уведомления для amoCRM — контроль сделок в реальном времени",
  description: "Виджет отправляет мгновенные уведомления о событиях amoCRM в Telegram. Запуск SalesBot одним кликом, умные триггеры. От 990₽.",
  keywords: [
    'telegram уведомления amocrm',
    'телеграм интеграция amocrm',
    'уведомления сделок telegram',
    'salesbot amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/telegram-notify",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramWidget searchParams={params} />;
}
