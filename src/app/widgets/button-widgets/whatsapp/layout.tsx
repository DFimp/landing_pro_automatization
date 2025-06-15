import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Быстрый переход в WhatsApp - amoCRM",
    description: "Мгновенный переход в чат с клиентом в WhatsApp прямо из amoCRM. Один клик вместо копирования номеров и поиска контактов.",
    keywords: "AmoCRM, WhatsApp, мессенджер, быстрый переход, виджет, автоматизация, CRM",
    openGraph: {
        title: "Быстрый переход в WhatsApp - amoCRM",
        description: "Превратите каждый номер телефона в прямую ссылку на чат с клиентом в WhatsApp.",
        type: "website",
    },
};

export default function WhatsAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}