import MassiveLeads from "@/page/Widget/MassiveLeads";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <MassiveLeads searchParams={searchParams} />;
}
