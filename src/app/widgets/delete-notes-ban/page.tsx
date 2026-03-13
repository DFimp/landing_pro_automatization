import type { Metadata } from "next";
import DeleteNotesBan from "@/page/Widget/DeleteNotesBan";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['delete-notes-ban'];

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <DeleteNotesBan searchParams={params} />;
}
