import type { Metadata } from "next";
import ColorDeals from "@/page/Widget/ColorDeals";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["color-leads"];

export const metadata: Metadata = createSEOMetadata({
  title: widget.seoTitle,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/color-leads",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <ColorDeals searchParams={params} />;
}
