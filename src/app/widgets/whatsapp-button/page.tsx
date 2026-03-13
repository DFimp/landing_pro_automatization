import type { Metadata } from "next";
import WhatsappButton from "@/widgets/widgetPages/WhatsappButton";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['whatsapp-button'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WhatsappButton searchParams={params} />;
}
