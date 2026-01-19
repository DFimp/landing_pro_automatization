import type { Metadata } from "next";
import Googleheets from "@/page/Widget/GoogleSheets";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['google-sheets'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.title,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/google-sheets",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Googleheets  searchParams={params}  />
}