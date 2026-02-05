import type { Metadata } from "next";
import CopyingFields from "@/page/Widget/CopyingFields";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['copying-fields'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.seoTitle,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/copying-fields",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <CopyingFields searchParams={params} />;
}
