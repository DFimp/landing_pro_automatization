import type { Metadata } from "next";
import "./style.css";
import {
    AccompanimentHeroSection,
    AccompanimentScrumSection,
    AccompanimentHelpSection,
    AccompanimentProblemsSection,
    AccompanimentTariffsSection,
} from "@/widgets/accompaniment";

export const metadata: Metadata = {
  title: "Сопровождение amoCRM",
  description: "Профессиональное сопровождение amoCRM: техническая поддержка, доработки, обслуживание CRM системы. Позаботимся о том, чтобы ваша амо СРМ работала как часы без сбоев.",
  keywords: [
    "сопровождение amocrm",
    "сопровождение амо срм", 
    "техническая поддержка amocrm",
    "обслуживание amocrm",
    "поддержка crm системы",
    "доработка amocrm",
    "техническое сопровождение crm",
    "администрирование amocrm",
    "maintenance amocrm",
    "support amocrm",
    "crm поддержка",
    "обновление amocrm",
    "мониторинг amocrm"
  ],
  
  openGraph: {
    title: "Сопровождение amoCRM - Профессиональная техническая поддержка",
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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://pro-automatization.ru/accompaniment",
  },
};

export default function Accompaniment() {
    return (
        <main id="accompaniment" className="sm:pb-20 pb-10 sm:pt-20 overflow-hidden">
            <AccompanimentHeroSection />
            <AccompanimentProblemsSection />
            <AccompanimentHelpSection />
            <AccompanimentScrumSection />
            <AccompanimentTariffsSection />
        </main>
    );
}