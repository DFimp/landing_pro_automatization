import WhatsappButton from "@/page/Widget/WhatsappButton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <WhatsappButton searchParams={params} />;
}
