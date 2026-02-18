import type { Metadata } from "next";
import AmoCrmHelpsSellArticle from "@/page/Article/AmoCrmHelpsSell/index";
import { createSEOMetadata } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";

const article = ARTICLES_DATA["amocrm-helps-sell"];

export const metadata: Metadata = createSEOMetadata({
  title: article.title,
  description: article.description,
  keywords: article.keywords,
  canonical: "/articles/amocrm-helps-sell",
  ogType: "article",
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function Page() {
  return <AmoCrmHelpsSellArticle />;
}
