import type { Metadata } from "next";
import License from "@/page/License";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Лицензия amoCRM — покупка и продление | Про Автоматизацию",
  description: "Покупка и продление лицензий amoCRM. Официальный партнер. Помощь в выборе тарифа. Скидки для клиентов.",
  keywords: ["лицензия amocrm", "купить amocrm", "тарифы amocrm", ...CORE_KEYWORDS.setup],
  canonical: "/license",
  ogType: "website",
});

export default function Page() {
  return <License />;
}
