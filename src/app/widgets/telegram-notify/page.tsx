import type { Metadata } from "next";
import TelegramWidget from "@/widgets/widgetPages/TelegramNotify";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['telegram-notify'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramWidget searchParams={params} />;
}
