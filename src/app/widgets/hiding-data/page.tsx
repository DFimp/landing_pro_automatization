import type { Metadata } from "next";
import HidingData from "@/widgets/widgetPages/HidingData";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['hiding-data'];

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <HidingData searchParams={params} />;
}
