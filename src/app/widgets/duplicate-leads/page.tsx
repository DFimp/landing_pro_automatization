import type { Metadata } from "next";
import DuplicateLeads from "@/page/Widget/DuplicateLeads";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['duplicate-leads'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.title,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/duplicate-leads",
  ogType: "website",
});
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateLeads searchParams={params} />;
}
