import TimeZone from "@/page/Widget/TimeZone";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <TimeZone searchParams={params} />;
}
