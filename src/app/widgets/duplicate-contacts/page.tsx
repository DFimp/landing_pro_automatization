import DuplicateContacts from "@/page/Widget/DuplicateContacts";

export default function Page({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return <DuplicateContacts searchParams={searchParams} />;
}
