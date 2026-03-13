import type { Metadata } from "next";
import WidgetsPage from "@/page/Widget/WidgetsPage";
import { WIDGETS_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_PAGE_METADATA;

export default function Page() {
  return <WidgetsPage />;
}
