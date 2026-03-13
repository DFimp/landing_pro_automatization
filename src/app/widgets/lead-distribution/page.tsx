import type { Metadata } from "next";
import Distribution from "@/page/Widget/Distribution";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['lead-distribution'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Distribution searchParams={params} />;
}
