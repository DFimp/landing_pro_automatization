import type { Metadata } from "next";
import WhatsappButton from "@/page/Widget/WhatsappButton";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['whatsapp-button'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.title,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/whatsapp-button",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WhatsappButton searchParams={params} />;
}
