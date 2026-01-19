import type { Metadata } from "next";
import AutoTask from "@/page/Widget/AutoTask";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['auto-tasks'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.title,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/auto-tasks",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <AutoTask searchParams={params} />;
}
