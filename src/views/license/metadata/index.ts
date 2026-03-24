import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";

export const metadata: Metadata = createSEOMetadata({
  title: "Лицензия amoCRM — покупка и продление | Про Автоматизацию",
  description:
    "Покупка и продление лицензий amoCRM. Официальный партнер. Помощь в выборе тарифа. Скидки для клиентов.",
  canonical: "/license",
  ogType: "website",
});
