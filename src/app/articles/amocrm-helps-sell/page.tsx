import type { Metadata } from "next";
import AmoCrmHelpsSellArticle from "./AmoCrmHelpsSellArticle";
import { ARTICLES_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = ARTICLES_METADATA['amocrm-helps-sell'];

export default function Page() {
  return <AmoCrmHelpsSellArticle />;
}
