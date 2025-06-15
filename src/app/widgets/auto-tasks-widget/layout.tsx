// app/auto-tasks-widget/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Автозадачи в сделках AmoCRM - Никогда не забывайте о сделках",
    description: "Автоматически создавайте задачи для сделок без активности. Настраиваемые статусы, типы задач и ответственные. Увеличьте конверсию на 35% благодаря своевременному контакту с клиентами.",
    keywords: "AmoCRM, автозадачи, задачи, сделки, автоматизация, CRM, менеджер, виджет, контроль продаж, воронка",
    openGraph: {
        title: "Автозадачи в сделках AmoCRM - Никогда не забывайте о сделках",
        description: "Автоматически создавайте задачи для сделок без активности. Увеличьте конверсию на 35%!",
        type: "website",
        images: [
            {
                url: "/auto-tasks-widget-preview.jpg",
                width: 1200,
                height: 630,
                alt: "Автозадачи в сделках AmoCRM"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Автозадачи в сделках AmoCRM",
        description: "Автоматически создавайте задачи для сделок без активности. Увеличьте конверсию на 35%!",
        images: ["/auto-tasks-widget-preview.jpg"]
    }
};


export default function AutoTasksWidget({
                                                children,
                                            }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
