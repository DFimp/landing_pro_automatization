import type { Metadata } from "next";
import TimeZone from "@/widgets/widgetPages/TimeZone";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['time-zone'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TimeZone searchParams={params} />;
}
