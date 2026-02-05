import type { Metadata } from "next";
import HidingData from "@/page/Widget/HidingData";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['hiding-data'];

export const metadata: Metadata = createSEOMetadata({
    title: widget.title,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/hiding-data",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <HidingData searchParams={params} />;
}
