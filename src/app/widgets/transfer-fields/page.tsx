import type { Metadata } from "next";
import TransferFields from "@/widgets/widgetPages/TransferFields";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['transfer-fields'];

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <TransferFields searchParams={params} />;
}
