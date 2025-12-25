import type { Metadata } from "next";
import AmoCrmHelpsSellArticle from "@/page/Article/AmoCrmHelpsSell/index";

export const metadata: Metadata = {
  title: "amoCRM: почему эта CRM реально помогает бизнесу продавать больше",
  description:
    "Разбираем, чем amoCRM действительно помогает бизнесу продавать больше: воронка продаж, автоматизация, интеграции, ошибки внедрения и роль интегратора.",
};

export default function Page() {
  return <AmoCrmHelpsSellArticle />;
}
