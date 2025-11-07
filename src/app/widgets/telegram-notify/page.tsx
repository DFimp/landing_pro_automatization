import TelegramWidget from "@/page/Widget/TelegramNotify";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramWidget searchParams={params} />;
}
