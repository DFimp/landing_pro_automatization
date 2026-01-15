import type { Metadata } from "next";
import ArticlesPage from "@/page/Article/ArticlesPage/index";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Статьи про amoCRM — база знаний | Про Автоматизацию",
  description: "Полезные статьи про amoCRM: настройка, автоматизация, интеграции, лайфхаки. Практические кейсы и инструкции.",
  keywords: ["статьи amocrm", "база знаний amocrm", "инструкции amocrm", ...CORE_KEYWORDS.automation],
  canonical: "/articles",
  ogType: "website",
});

export default function Page() {
  return <ArticlesPage />;
}
