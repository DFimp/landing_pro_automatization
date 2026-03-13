import type { Metadata } from "next";
import FeedFilter from "@/page/Widget/SettingsFeed";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['setting-feed'];

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ embed?: string }>;
}) {
    const params = await searchParams;
    return <FeedFilter searchParams={params} />;
}
