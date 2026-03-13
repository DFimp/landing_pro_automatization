import type { Metadata } from "next";
import DeleteTasksBan from "@/widgets/widgetPages/DeleteTasksBan";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['delete-tasks-ban'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DeleteTasksBan searchParams={params} />;
}
