import WidgetPage, { metadata } from "@/views/widgets/ShiftSelect";

export { metadata };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WidgetPage searchParams={params} />;
}
