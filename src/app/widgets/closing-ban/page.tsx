import type { Metadata } from "next";
import СlosingBan from "@/page/Widget/СlosingBan";

export const metadata: Metadata = {
  title: "Запрет закрытия задач без результата в amoCRM",
  description: "Виджет блокирует закрытие задач без описания результата в amoCRM. Полная прозрачность работы команды и контроль качества выполнения. Настройка за 3 минуты.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/closing-ban",
  },

  openGraph: {
    title: "Запрет закрытия задач без результата - контроль работы в amoCRM",
    description: "Виджет не даст закрыть задачу без описания результата. Полная прозрачность работы команды и контроль качества выполнения задач.",
    url: "https://pro-automatization.ru/widgets/closing-ban",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Запрет закрытия задач без результата - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Контроль качества задач в amoCRM - виджет для прозрачности",
    description: "Блокирует закрытие задач без результата. Полная история выполненной работы и контроль команды.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <СlosingBan searchParams={params} />;
}
