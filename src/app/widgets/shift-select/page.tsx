import type { Metadata } from "next";
import ShiftSelect from "@/page/Widget/ShiftSelect";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['shift-select'];

export const metadata: Metadata = createSEOMetadata({
    title: widget.title,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/shift-select",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <ShiftSelect searchParams={params} />;
}
