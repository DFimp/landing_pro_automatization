import type { Metadata } from "next";
import MeetCalendar from "@/page/Widget/MeetCalendar";
import { WIDGETS_METADATA } from "@/shared/constants/metadata";

export const metadata: Metadata = WIDGETS_METADATA['meet-calendar'];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <MeetCalendar searchParams={params} />;
}
