import WidgetPage, { metadata } from "@/views/widgets/pages/hiding-data";

export { metadata };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WidgetPage searchParams={params} />;
}
