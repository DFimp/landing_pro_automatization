import Distribution from "@/page/Widget/Distribution";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <Distribution searchParams={searchParams} />;
}
