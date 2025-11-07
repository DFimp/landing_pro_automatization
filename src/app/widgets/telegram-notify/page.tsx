import TelegramWidget from "@/page/Widget/TelegramNotify";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <TelegramWidget searchParams={searchParams} />;
}
