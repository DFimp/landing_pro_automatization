import type { Metadata } from "next";
import Accompaniment from "@/page/Accompaniment";

export const metadata: Metadata = {
  title: "Сопровождение amoCRM - техническая поддержка",
  description: "Профессиональное сопровождение amoCRM: техническая поддержка, доработки, обслуживание CRM системы. Позаботимся о том, чтобы ваша амо СРМ работала как часы без сбоев.",
  
  alternates: {
    canonical: "https://pro-automatization.ru/accompaniment",
  },
  
  openGraph: {
    title: "Сопровождение amoCRM - техническая поддержка",
    description: "Полное техническое сопровождение amoCRM: поддержка, доработки, обслуживание. Ваша CRM система будет работать стабильно и эффективно.",
    url: "https://pro-automatization.ru/accompaniment",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Сопровождение amoCRM - Про Автоматизацию"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Сопровождение amoCRM - Техническая поддержка CRM",
    description: "Профессиональное сопровождение amoCRM: поддержка, доработки, обслуживание CRM системы",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default function Page() {
    return <Accompaniment />;
}