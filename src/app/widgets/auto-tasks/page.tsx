import AutoTask from "@/page/Widget/AutoTask";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <AutoTask searchParams={searchParams} />;
}
