import type { Metadata } from "next";
import MassiveLeads from "@/page/Widget/MassiveLeads";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['massive-leads'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <MassiveLeads searchParams={params} />;
}
