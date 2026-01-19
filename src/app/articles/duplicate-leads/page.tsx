import type { Metadata } from "next";
import ArticleDuplicateLeads from "@/page/Article/DuplicateLeads";
import { createSEOMetadata } from "@/shared/lib/seo";
import { ARTICLES_DATA } from "@/shared/constants/articles";

const article = ARTICLES_DATA['duplicate-leads'];

export const metadata: Metadata = createSEOMetadata({
  title: article.title,
  description: article.description,
  keywords: article.keywords,
  canonical: "/articles/duplicate-leads",
  ogType: "article",
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
});

export default function Page() {
    return <ArticleDuplicateLeads />;
}
