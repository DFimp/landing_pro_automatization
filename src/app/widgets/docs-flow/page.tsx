import type { Metadata } from "next";
import DocsFlow from "@/page/Widget/DocsFlow";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['docs-flow'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DocsFlow searchParams={params} />;
}

