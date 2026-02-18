import type { Metadata } from "next";
import FeedFilter from "@/page/Widget/SettingsFeed";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['setting-feed'];

export const metadata: Metadata = createSEOMetadata({
    title: widget.seoTitle,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/setting-feed",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <FeedFilter searchParams={params} />;
}
