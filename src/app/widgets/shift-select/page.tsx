import type { Metadata } from "next";
import ShiftSelect from "@/widgets/widgetPages/ShiftSelect";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['shift-select'];

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <ShiftSelect searchParams={params} />;
}
