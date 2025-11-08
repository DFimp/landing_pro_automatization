import type { Metadata } from "next";
import TelegramWidget from "@/page/Widget/TelegramNotify";

export const metadata: Metadata = {
  title: "Telegram уведомления для amoCRM - мгновенные оповещения о сделках",
  description: "Виджет отправляет мгновенные уведомления о событиях amoCRM в Telegram. Запуск SalesBot одним кликом, умные триггеры, контроль времени отправки. Полная автоматизация коммуникаций.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/telegram-notify",
  },

  openGraph: {
    title: "Будьте в курсе событий amoCRM через Telegram",
    description: "Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами прямо в мессенджере.",
    url: "https://pro-automatization.ru/widgets/telegram-notify",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Telegram уведомления для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Уведомления amoCRM в Telegram - контроль сделок в реальном времени",
    description: "Мгновенные уведомления о событиях в amoCRM. Запуск SalesBot из Telegram, умные триггеры, автоматизация.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramWidget searchParams={params} />;
}
