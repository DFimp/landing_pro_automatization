import type { Metadata } from "next";
import Case from "@/page/Cases";

export const metadata: Metadata = {
  title: "Кейсы внедрений amoCRM — PRO Автоматизация",
  description:
    "Реальные кейсы внедрений и сопровождения amoCRM: задачи, решения и результаты. Как мы повышаем конверсию и оптимизируем процессы у клиентов.",
  alternates: {
    canonical: "https://pro-automatization.ru/cases",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://pro-automatization.ru/cases",
    title: "Кейсы внедрений amoCRM — PRO Автоматизация",
    description:
      "Подборка реальных кейсов: что внедряли, какие метрики улучшили, какие инструменты использовали.",
    siteName: "Про Автоматизацию",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Кейсы внедрений amoCRM — PRO Автоматизация",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейсы внедрений amoCRM — PRO Автоматизация",
    description:
      "Смотрите реальные примеры внедрений и сопровождения amoCRM: задачи, решения и результаты.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default function Page() {
  return <Case />;
}
