import type { Metadata } from "next";
import Distribution from "@/page/Widget/Distribution";

export const metadata: Metadata = {
  title: "Распределение сделок в amoCRM - автоматическое распределение по правилам",
  description: "Виджет автоматически распределяет сделки между менеджерами в amoCRM по процентам, лимитам или равными долями. Учет контактов, компаний и активности. Справедливая нагрузка команды.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/widgets/lead-distribution",
  },

  openGraph: {
    title: "Справедливо распределите нагрузку между менеджерами",
    description: "Автоматическое распределение новых сделок по процентам, максимальному количеству или равными долями. Учёт контактов, компаний и активности менеджеров.",
    url: "https://pro-automatization.ru/widgets/lead-distribution",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Распределение сделок для amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Распределение сделок в amoCRM - умная автоматизация",
    description: "Автоматическое распределение сделок по правилам. Учет нагрузки, контактов и активности менеджеров.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Distribution searchParams={params} />;
}
