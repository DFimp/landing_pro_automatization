import type { Metadata } from "next";
import TimeZone from "@/page/Widget/TimeZone";

export const metadata: Metadata = {
  title: "Регион по телефону для amoCRM - определение времени клиента",
  description: "Виджет автоматически определяет регион, текущее время и город клиента по номеру телефона в amoCRM. Звоните клиентам в правильное время, избегайте неудобных звонков.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/time-zone", 
  },

  openGraph: {
    title: "Звоните клиентам в правильное время!",
    description: "Автоматически определяйте регион и текущее время клиента по номеру телефона. Никогда не разбудите клиента в 6 утра или не позвоните в полночь!",
    url: "https://pro-automatization.ru/widgets/time-zone",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Регион по телефону для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Время клиента в amoCRM - определение региона по телефону",
    description: "Автоматическое определение времени и региона клиента. Звоните в правильное время!",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TimeZone searchParams={params} />;
}
