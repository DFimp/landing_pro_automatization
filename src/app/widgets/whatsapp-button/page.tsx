import WhatsappButton from "@/page/Widget/WhatsappButton";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <WhatsappButton searchParams={searchParams} />;
}
