import type { Metadata } from "next";
import TBank from "@/page/Widget/TBank";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["t-bank"];

export const metadata: Metadata = createSEOMetadata({
  title: widget.seoTitle,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/t-bank",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TBank searchParams={params} />;
}

