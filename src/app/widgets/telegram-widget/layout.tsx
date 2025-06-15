// app/telegram-widget/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Телеграм уведомления amoCRM",
    description: "Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами.",
    keywords: "AmoCRM, Telegram, Телеграм, уведомления, SalesBot, автоматизация, CRM, интеграция",
    openGraph: {
        title: "Телеграм уведомления amoCRM",
        description: "Получайте мгновенные уведомления в Telegram и запускайте SalesBot одним нажатием.",
        type: "website",
    },
};

export default function TelegramWidgetLayout({
                                                 children,
                                             }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
