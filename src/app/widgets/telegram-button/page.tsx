import type { Metadata } from "next";
import TelegramButton from "@/page/Widget/TelegramButton";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['telegram-button'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramButton searchParams={params} />;
}
