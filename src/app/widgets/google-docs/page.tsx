import type { Metadata } from "next";
import GoogleDocs from "@/page/Widget/GoogleDocs";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['google-docs'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <GoogleDocs searchParams={params} />;
}