import TelegramButton from "@/page/Widget/TelegramButton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TelegramButton searchParams={params} />;
}
