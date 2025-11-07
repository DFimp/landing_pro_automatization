import type { Metadata } from "next";
import WidgetsPage from "@/page/Widget/WidgetsPage";

export const metadata: Metadata = {
  title: "Виджеты для amoCRM - готовые решения от Про Автоматизацию",
  description:
    "Готовые виджеты для amoCRM: Telegram уведомления, распределение лидов, объединение дублей, автозадачи, определение часового пояса клиента и многое другое.",

  alternates: {
    canonical: "https://pro-automatization.ru/widgets",
  },

  openGraph: {
    title: "Виджеты для amoCRM - готовые решения от Про Автоматизацию",
    description:
      "Готовые виджеты для amoCRM: Telegram уведомления, распределение лидов, объединение дублей, автозадачи, определение часового пояса клиента и многое другое.",
    url: "https://pro-automatization.ru/widgets",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Виджеты для amoCRM - Про Автоматизацию",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Виджеты для amoCRM - Готовые решения",
    description: "Готовые виджеты для amoCRM",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default function Page() {
  return <WidgetsPage />;
}
