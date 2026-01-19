import type { Metadata } from "next";
import DeleteNotesBan from "@/page/Widget/DeleteNotesBan";
import { createSEOMetadata } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA['delete-notes-ban'];

export const metadata: Metadata = createSEOMetadata({
    title: widget.title,
    description: widget.description,
    keywords: widget.keywords,
    canonical: "/widgets/delete-notes-ban",
    ogType: "website",
});

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <DeleteNotesBan searchParams={params} />;
}
