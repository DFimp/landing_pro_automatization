import type { Metadata } from "next";
import AutoTask from "@/page/Widget/AutoTask";

export const metadata: Metadata = {
  title: "Автозадачи в сделках amoCRM - виджет для контроля сделок",
  description: "Виджет автоматически создает задачи для сделок без активности в amoCRM. Увеличьте конверсию на 35% благодаря своевременному контакту с клиентами. Настройка за 5 минут.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/auto-task",
  },

  openGraph: {
    title: "Автозадачи в сделках amoCRM - никогда не забывайте о клиентах",
    description: "Автоматически создавайте задачи для сделок без активности. Настраиваемые статусы, типы задач и ответственные. Увеличьте конверсию на 35%.",
    url: "https://pro-automatization.ru/widgets/auto-task",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Автозадачи в сделках для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Автозадачи в сделках amoCRM - контроль сделок 24/7",
    description: "Виджет автоматически ставит задачи для сделок без активности. Рост конверсии на 35%.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <AutoTask searchParams={params} />;
}
