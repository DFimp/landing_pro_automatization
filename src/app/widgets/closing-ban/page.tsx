import type { Metadata } from "next";
import СlosingBan from "@/page/Widget/СlosingBan";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['closing-ban'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <СlosingBan searchParams={params} />;
}
