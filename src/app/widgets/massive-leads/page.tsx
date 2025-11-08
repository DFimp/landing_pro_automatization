import type { Metadata } from "next";
import MassiveLeads from "@/page/Widget/MassiveLeads";

export const metadata: Metadata = {
  title: "Массовое создание сделок в amoCRM - сотни сделок за минуты",
  description: "Виджет для массового создания сделок в amoCRM. Создавайте сделки для сотен контактов одновременно с тегами, выбором воронки и этапа. Автоматизация рутинной работы.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/massive-leads",
  },

  openGraph: {
    title: "Создавайте сотни сделок за секунды в amoCRM",
    description: "Автоматизируйте создание сделок для всех контактов одним нажатием. Умная фильтрация, автоматические теги, выбор воронки. Забудьте о рутинной работе!",
    url: "https://pro-automatization.ru/widgets/massive-leads",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Массовое создание сделок для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Массовое создание сделок в amoCRM - автоматизация",
    description: "Создавайте сделки для сотен контактов за минуты. Умная фильтрация, теги, выбор воронки и этапа.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <MassiveLeads searchParams={params} />;
}
