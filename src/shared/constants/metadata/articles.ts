import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";
import { ARTICLES_DATA } from "@/shared/constants/articles";

export const ARTICLES_METADATA: Record<string, Metadata> = Object.fromEntries(
  Object.entries(ARTICLES_DATA).map(([key, article]) => [
    key,
    createSEOMetadata({
      title: article.title,
      description: article.description,
      keywords: article.keywords,
      canonical: article.link,
      ogType: "article",
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
    }),
  ]),
);
