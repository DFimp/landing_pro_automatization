// app/widgets/duplicate-leads/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Объединение дублей сделок amoCRM",
    description: "Автоматическое склеивание дублированных сделок с сохранением всех важных данных. Экономьте время менеджеров и улучшайте качество базы данных.",
    keywords: "AmoCRM, дубли, склеивание, объединение, сделки, автоматизация, CRM, дедупликация, merge",
    openGraph: {
        title: "Объединение дублей сделок amoCRM",
        description: "Автоматическое склеивание дублированных сделок с сохранением всех важных данных.",
        type: "website",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}