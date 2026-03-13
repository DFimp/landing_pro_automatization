import type { Metadata } from "next";
import QuickAmoCrmSetupArticle from "./QuickAmoCrmSetupArticle";
import { ARTICLES_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = ARTICLES_METADATA['amocrm-quick-setup'];

export default function Page() {
  return <QuickAmoCrmSetupArticle />;
}
