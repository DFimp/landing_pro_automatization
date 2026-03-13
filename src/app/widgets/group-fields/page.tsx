import type { Metadata } from "next";
import GroupFields from "@/widgets/widgetPages/GroupFields";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['group-fields'];

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <GroupFields searchParams={params} />;
}
