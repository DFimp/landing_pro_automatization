import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Виджеты быстрого перехода в мессенджеры - amoCRM",
    description: "Мгновенный переход в чат с клиентами в Telegram и WhatsApp прямо из amoCRM. Один клик вместо копирования номеров.",
    keywords: "AmoCRM, Telegram, WhatsApp, мессенджеры, быстрый переход, виджеты, автоматизация, CRM",
};

export default function ButtonWidgetsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
