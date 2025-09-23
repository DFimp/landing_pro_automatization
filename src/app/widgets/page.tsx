import type { Metadata } from "next";
import WidgetsClient from "./widgets-client";

export const metadata: Metadata = {
  title: "Виджеты для amoCRM - Автоматизация и интеграции",
  description: "Готовые виджеты для amoCRM: Telegram уведомления, автозадачи, объединение дублей, распределение лидов, определение часового пояса клиента. Увеличьте эффективность CRM на 35%.",
  keywords: [
    "виджеты amocrm",
    "виджеты амо срм", 
    "telegram виджет amocrm",
    "автозадачи amocrm",
    "дубли сделок amocrm",
    "распределение лидов amocrm",
    "часовой пояс клиента amocrm",
    "whatsapp amocrm",
    "автоматизация amocrm",
    "интеграция telegram amocrm",
    "crm виджеты",
    "расширения amocrm"
  ],
   
  openGraph: {
    title: "Виджеты для amoCRM - Готовые решения для автоматизации",
    description: "8 готовых виджетов для amoCRM: Telegram интеграция, автозадачи, объединение дублей, умное распределение лидов. Увеличьте конверсию на 35%.",
    url: "https://pro-automatization.ru/widgets",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Виджеты для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Виджеты для amoCRM - Готовые решения",
    description: "8 готовых виджетов для автоматизации amoCRM: Telegram, автозадачи, распределение лидов",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://pro-automatization.ru/widgets",
  },
};

export default function Widgets() {
  return <WidgetsClient />;
}
