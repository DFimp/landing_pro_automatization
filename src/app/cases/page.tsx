import type { Metadata } from "next";
import Case from "@/page/Cases";
import { createSEOMetadata, CORE_KEYWORDS } from "@/shared/lib/seo";

export const metadata: Metadata = createSEOMetadata({
  title: "Кейсы внедрения amoCRM — реальные проекты | Про Автоматизацию",
  description: "Кейсы внедрения и автоматизации amoCRM для разных бизнесов. Реальные результаты, сроки, решения.",
  keywords: ["кейсы amocrm", "примеры внедрения amocrm", "проекты amocrm", ...CORE_KEYWORDS.automation],
  canonical: "/cases",
  ogType: "website",
});

export default function Page() {
  return <Case />;
}
