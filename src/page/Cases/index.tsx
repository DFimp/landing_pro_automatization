import { HeroSection, CasesGrid, TestimonialsSection } from "@/widgets/cases_widgets";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export default function Cases() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CasesGrid />
      <TestimonialsSection />

      <div className="my-15">
        <ConsultCard />
      </div>
    </main>
  );
}
