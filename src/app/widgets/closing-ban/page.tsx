import СlosingBan from "@/page/Widget/СlosingBan";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <СlosingBan searchParams={params} />;
}
