import type { Metadata } from "next";
import { CASES_PAGE_METADATA } from "@/shared/constants/metadata";
import { HeroSection, CasesGrid, TestimonialsSection, CASES } from "@/widgets/cases_widgets";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import { CollectionPageSchemaTag } from "@/shared/lib/seo";
import { SITE_URL } from "@/shared/constants";

export const metadata: Metadata = CASES_PAGE_METADATA;

export default CasesPageContent;

function CasesPageContent() {
  return (
    <>
      <CollectionPageSchemaTag
        data={{
          name: "Кейсы внедрения amoCRM",
          description: "Кейсы внедрения и автоматизации amoCRM для разных бизнесов. Реальные результаты, сроки, решения.",
          url: `${SITE_URL}/cases`,
        }}
        items={CASES.map((caseItem, index) => ({
          name: caseItem.title,
          url: `${SITE_URL}/cases#case-${index + 1}`,
          description: caseItem.text,
        }))}
      />
      <main className="overflow-hidden [&>*:last-child]:my-15">
        <HeroSection />
        <CasesGrid />
        <TestimonialsSection />
        <ConsultCard />
      </main>
    </>
  );
}
