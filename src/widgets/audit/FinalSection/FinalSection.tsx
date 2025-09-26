import WhyChooseUs from "@/widgets/audit/FinalSection/ui/WhyChooseUs";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export function FinalSection() {
  return (
    <section className="flex flex-col gap-20">
      <WhyChooseUs />
      <div className="sm:max-w-[1200px] sm:w-full sm:mx-auto sm:px-4">
        <ConsultCard />
      </div>
    </section>
  );
}
