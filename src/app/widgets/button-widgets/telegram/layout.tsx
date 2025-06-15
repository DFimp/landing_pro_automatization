// app/widgets/button-widgets/telegram/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Быстрый переход в Telegram - amoCRM",
    description: "Мгновенный переход в чат с клиентом в Telegram прямо из amoCRM. Один клик вместо копирования номеров и поиска контактов.",
    keywords: "AmoCRM, Telegram, мессенджер, быстрый переход, виджет, автоматизация, CRM",
    openGraph: {
        title: "Быстрый переход в Telegram - amoCRM",
        description: "Превратите каждый номер телефона в прямую ссылку на чат с клиентом в Telegram.",
        type: "website",
    },
};

export default function TelegramLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}