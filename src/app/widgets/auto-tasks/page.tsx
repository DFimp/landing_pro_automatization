import WidgetPage, { metadata } from "@/views/widgets/AutoTasks";

export { metadata };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WidgetPage searchParams={params} />;
}
