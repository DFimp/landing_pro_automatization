import DuplicateLeads from "@/page/Widget/DuplicateLeads";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateLeads searchParams={params} />;
}
