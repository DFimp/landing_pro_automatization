// app/telegram-widget/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Телеграм уведомления amoCRM",
  description:
    "Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами.",
};

export default function TelegramWidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
