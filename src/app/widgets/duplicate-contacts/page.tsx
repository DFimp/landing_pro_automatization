import type { Metadata } from "next";
import DuplicateContacts from "@/page/Widget/DuplicateContacts";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['duplicate-contacts'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateContacts searchParams={params} />;
}
