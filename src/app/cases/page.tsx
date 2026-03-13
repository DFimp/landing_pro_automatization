import type { Metadata } from "next";
import Case from "@/page/Cases";
import { CASES_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = CASES_PAGE_METADATA;

export default function Page() {
  return <Case />;
}
