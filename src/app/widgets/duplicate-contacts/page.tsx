import DuplicateContacts from "@/page/Widget/DuplicateContacts";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>;
}) {
  const params = await searchParams;
  return <DuplicateContacts searchParams={params} />;
}
