import type { Metadata } from "next";
import QuickAmoCrmSetupArticle from "@/page/Article/QuickAmoCrmSetup";
import { createSEOMetadata } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";

const article = ARTICLES_DATA["amocrm-quick-setup"];

export const metadata: Metadata = createSEOMetadata({
  title: article.title,
  description: article.description,
  keywords: article.keywords,
  canonical: "/articles/amocrm-quick-setup",
  ogType: "article",
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function Page() {
  return <QuickAmoCrmSetupArticle />;
}
