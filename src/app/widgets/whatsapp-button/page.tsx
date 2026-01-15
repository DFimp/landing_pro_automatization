import type { Metadata } from "next";
import WhatsappButton from "@/page/Widget/WhatsappButton";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Кнопка WhatsApp для amoCRM — быстрый переход в чат",
  description: "Виджет добавляет кнопку быстрого перехода в WhatsApp-чат клиента. Мгновенная коммуникация прямо из CRM. От 490₽.",
  keywords: [
    'кнопка whatsapp amocrm',
    'whatsapp чат amocrm',
    'быстрый переход whatsapp',
    'интеграция whatsapp amocrm',
    ...CORE_KEYWORDS.widgets,
  ],
  canonical: "/widgets/whatsapp-button",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WhatsappButton searchParams={params} />;
}
