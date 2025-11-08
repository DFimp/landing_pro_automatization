import type { Metadata } from "next";
import WhatsappButton from "@/page/Widget/WhatsappButton";

export const metadata: Metadata = {
  title: "Кнопка WhatsApp в amoCRM - переход в чат за 1 клик",
  description: "Бесплатный виджет добавляет кнопку WhatsApp к каждому номеру телефона в amoCRM. Мгновенный переход в чат без копирования номера. Автоматическое форматирование, работа со всеми номерами.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/whatsapp-button",
  },

  openGraph: {
    title: "Написать в WhatsApp за 1 клик из amoCRM",
    description: "Превратите каждый номер телефона в прямую ссылку на чат с клиентом в WhatsApp. Больше никакого копирования номеров и поиска контактов! Полностью бесплатно.",
    url: "https://pro-automatization.ru/widgets/whatsapp-button",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Кнопка WhatsApp для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WhatsApp-кнопка в amoCRM - переход за секунду",
    description: "Мгновенный переход в WhatsApp чат с клиентом. Никакого копирования номеров. Бесплатно!",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WhatsappButton searchParams={params} />;
}
