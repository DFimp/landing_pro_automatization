import type { Metadata } from "next";
import DuplicateLeads from "@/page/Widget/DuplicateLeads";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['duplicate-leads'];
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateLeads searchParams={params} />;
}
