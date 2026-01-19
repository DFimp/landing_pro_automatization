import type { Metadata } from "next";
import GroupFields from "@/page/Widget/GroupFields";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['group-fields'];

export const metadata: Metadata = createSEOMetadata({
    title: widget.title,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/group-fields",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <GroupFields searchParams={params} />;
}
