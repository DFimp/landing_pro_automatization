import type { Metadata } from "next";
import License from "@/page/License";
import { LICENSE_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = LICENSE_PAGE_METADATA;

export default function Page() {
  return <License />;
}
