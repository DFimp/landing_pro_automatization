import WhyChooseUs from "@/widgets/audit/FinalSection/ui/WhyChooseUs";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export function FinalSection() {
  return (
    <section className="flex flex-col gap-20">
      <WhyChooseUs />
      <div className="container">
        <ConsultCard />
      </div>
    </section>
  );
}
