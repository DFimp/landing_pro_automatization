import TelegramButton from "@/page/Widget/TelegramButton";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <TelegramButton searchParams={searchParams} />;
}
