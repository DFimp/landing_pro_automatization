import type { Metadata } from "next";
import AutoTask from "@/page/Widget/AutoTask";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['auto-tasks'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <AutoTask searchParams={params} />;
}
