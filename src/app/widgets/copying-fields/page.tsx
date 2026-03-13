import type { Metadata } from "next";
import CopyingFields from "@/widgets/widgetPages/CopyingFields";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['copying-fields'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <CopyingFields searchParams={params} />;
}
