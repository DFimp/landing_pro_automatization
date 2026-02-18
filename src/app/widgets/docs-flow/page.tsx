import type { Metadata } from "next";
import DocsFlow from "@/page/Widget/DocsFlow";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["docs-flow"];

export const metadata: Metadata = {
  ...createSEOMetadata({
    title: widget.seoTitle,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/docs-flow",
    ogType: "website",
  }),
  robots: { index: false, follow: true },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DocsFlow searchParams={params} />;
}

