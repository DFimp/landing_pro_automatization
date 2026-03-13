import type { Metadata } from "next";
import ArticlesPage from "./ArticlesPage";
import { ARTICLES_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = ARTICLES_PAGE_METADATA;

export default function Page() {
  return <ArticlesPage />;
}
