import DuplicateLeads from "@/page/Widget/DuplicateLeads";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <DuplicateLeads searchParams={searchParams} />;
}
