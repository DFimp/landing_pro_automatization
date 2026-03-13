import type { Metadata } from "next";
import LicensePage from "./LicensePage";
import { LICENSE_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = LICENSE_PAGE_METADATA;

export default function Page() {
  return <LicensePage />;
}
