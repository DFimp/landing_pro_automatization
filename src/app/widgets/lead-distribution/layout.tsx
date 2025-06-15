// app/widgets/lead-distribution/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Распределение сделок amoCRM",
    description: "Автоматическое распределение новых сделок между менеджерами по процентам, максимальному количеству или равными долями. Умный учет контактов и компаний.",
    keywords: "AmoCRM, распределение, сделки, менеджеры, автоматизация, CRM, нагрузка, процент, лимит",
    openGraph: {
        title: "Распределение сделок amoCRM",
        description: "Автоматическое распределение новых сделок между менеджерами с учетом нагрузки и приоритетов.",
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