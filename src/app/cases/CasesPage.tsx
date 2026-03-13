import { HeroSection, CasesGrid, TestimonialsSection, CASES } from "@/widgets/cases_widgets";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import { CollectionPageSchemaTag } from "@/shared/lib/seo";
import { SITE_URL } from "@/shared/constants";

export default function Cases() {
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
      <main className="overflow-hidden">
        <HeroSection />
        <CasesGrid />
        <TestimonialsSection />

        <div className="my-15">
          <ConsultCard />
        </div>
      </main>
    </>
  );
}
