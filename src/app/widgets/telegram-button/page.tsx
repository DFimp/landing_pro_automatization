import type { Metadata } from "next";
import TelegramButton from "@/page/Widget/TelegramButton";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Кнопка Telegram для amoCRM — быстрый переход в чат",
  description: "Виджет добавляет кнопку быстрого перехода в Telegram-чат клиента. Мгновенная коммуникация прямо из CRM. От 490₽.",
  keywords: [
    'кнопка telegram amocrm',
    'telegram чат amocrm',
    'быстрый переход telegram',
    'интеграция telegram amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/telegram-button",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramButton searchParams={params} />;
}
