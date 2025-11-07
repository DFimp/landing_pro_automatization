import MassiveLeads from "@/page/Widget/MassiveLeads";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <MassiveLeads searchParams={params} />;
}
