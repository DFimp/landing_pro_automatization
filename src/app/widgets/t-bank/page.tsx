import type { Metadata } from "next";
import TBank from "@/page/Widget/TBank";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['t-bank'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TBank searchParams={params} />;
}

