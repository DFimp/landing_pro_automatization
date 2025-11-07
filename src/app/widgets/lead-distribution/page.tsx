import Distribution from "@/page/Widget/Distribution";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <Distribution searchParams={params} />;
}
