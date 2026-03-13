import type { Metadata } from "next";
import HomePage from "./HomePage";
import { HOME_PAGE_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = HOME_PAGE_METADATA;

export default function Page() {
  return <HomePage />;
}
