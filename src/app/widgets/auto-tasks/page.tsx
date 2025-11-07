import AutoTask from "@/page/Widget/AutoTask";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <AutoTask searchParams={params} />;
}
