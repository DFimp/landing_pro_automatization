import type { Metadata } from "next";
import ColorDeals from "@/widgets/widgetPages/ColorDeals";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['color-leads'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <ColorDeals searchParams={params} />;
}
