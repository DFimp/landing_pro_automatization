import type { Metadata } from "next";
import ArticleDuplicateLeads from "./ArticleDuplicateLeads";
import { ARTICLES_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = ARTICLES_METADATA['duplicate-leads'];

export default function Page() {
    return <ArticleDuplicateLeads />;
}
