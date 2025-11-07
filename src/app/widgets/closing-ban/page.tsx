import СlosingBan from "@/page/Widget/СlosingBan";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <СlosingBan searchParams={searchParams} />;
}
