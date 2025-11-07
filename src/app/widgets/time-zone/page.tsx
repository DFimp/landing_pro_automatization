import TimeZone from "@/page/Widget/TimeZone";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <TimeZone searchParams={searchParams} />;
}
