import type { Metadata } from "next";
import GoogleDocs from "@/page/Widget/GoogleDocs";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['google-docs'];

export const metadata: Metadata = {
  ...createSEOMetadata({
    title: widget.title,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/google-docs",
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
  return <GoogleDocs searchParams={params} />;
}