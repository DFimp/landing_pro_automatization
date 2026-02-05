import type { Metadata } from "next";
import TransferFields from "@/page/Widget/TransferFields";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['transfer-fields'];

export const metadata: Metadata = createSEOMetadata({
    title: widget.seoTitle,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/transfer-fields",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <TransferFields searchParams={params} />;
}
