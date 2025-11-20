import type { Metadata } from "next";
import DeleteTasksBan from "@/page/Widget/DeleteTasksBan";

export const metadata: Metadata = {
  title: "Запрет удаления задач в amoCRM",
  description:
    "Виджет запрещает удаление задач в amoCRM для выбранных менеджеров, с гибкими исключениями по типам задач. Защитите историю коммуникаций и дисциплину в CRM.",

  alternates: {
    canonical: "https://pro-automatization.ru/widgets/delete-tasks-ban",
  },

  openGraph: {
    title: "Полный контроль над удалением задач в amoCRM",
    description:
      "Ограничьте удаление задач для менеджеров, настройте исключения по типам задач и защитите вашу воронку от случайных и намеренных потерь активности.",
    url: "https://pro-automatization.ru/widgets/delete-tasks-ban",
    type: "website",
    images: [
      {
        url: "https://pro-automatization.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Запрет удаления задач для amoCRM - Про Автоматизацию",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Запрет удаления задач в amoCRM — защита от потери активности",
    description:
      "Запретите удаление задач для менеджеров, оставьте только нужные исключения по типам задач и сохраните историю работы с клиентами.",
    images: ["https://pro-automatization.ru/og-image.png"],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DeleteTasksBan searchParams={params} />;
}
