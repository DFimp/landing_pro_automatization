import type { Metadata } from "next";
import TelegramButton from "@/page/Widget/TelegramButton";

export const metadata: Metadata = {
  title: "Кнопка Telegram в amoCRM - мгновенный переход к клиенту",
  description: "Бесплатный виджет добавляет кнопку Telegram к каждому номеру телефона в amoCRM. Переход в чат за 1 клик без копирования номера и поиска контакта. Экономия времени менеджеров.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/telegram-button",
  },

  openGraph: {
    title: "Написать в Telegram за 1 клик из amoCRM",
    description: "Превратите каждый номер телефона в прямую ссылку на чат с клиентом. Больше никакого копирования номеров и поиска контактов! Полностью бесплатно.",
    url: "https://pro-automatization.ru/widgets/telegram-button",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Кнопка Telegram для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Telegram-кнопка в amoCRM - переход за секунду",
    description: "Мгновенный переход в Telegram чат с клиентом. Никакого копирования номеров. Бесплатно!",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramButton searchParams={params} />;
}
