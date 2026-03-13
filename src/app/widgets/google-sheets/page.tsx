import type { Metadata } from "next";
import Googleheets from "@/page/Widget/GoogleSheets";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['google-sheets'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Googleheets  searchParams={params}  />
}