import type { Metadata } from "next";
import TelegramButton from "@/page/Widget/TelegramButton";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['telegram-button'];

export const metadata: Metadata = createSEOMetadata({
  title: widget.seoTitle,
  description: widget.description,
  keywords: widget.keywords,
  canonical: "/widgets/telegram-button",
  ogType: "website",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramButton searchParams={params} />;
}
