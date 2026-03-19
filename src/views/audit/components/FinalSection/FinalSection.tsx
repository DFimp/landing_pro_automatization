import WhyChooseUs from "@/views/audit/components/FinalSection/ui/WhyChooseUs";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";

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
