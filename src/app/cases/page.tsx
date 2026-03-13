import type { Metadata } from "next";
import CasesPage from "./CasesPage";
import { CASES_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = CASES_PAGE_METADATA;

export default function Page() {
  return <CasesPage />;
}
