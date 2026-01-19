import type { Metadata } from "next";
import Distribution from "@/page/Widget/Distribution";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['lead-distribution'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.title,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/lead-distribution",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Distribution searchParams={params} />;
}
