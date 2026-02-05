import type { Metadata } from "next";
import DuplicateContacts from "@/page/Widget/DuplicateContacts";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['duplicate-contacts'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.seoTitle,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/duplicate-contacts",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateContacts searchParams={params} />;
}
