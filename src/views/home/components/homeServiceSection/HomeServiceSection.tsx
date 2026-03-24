import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ProcessList from "@/views/home/components/homeServiceSection/ui/ProcessList";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export function HomeServicesSection() {
  return (
    <section className="flex flex-col px-4 gap-5 sm:gap-20">
      <ScrollReveal as="div" variant="wipe" yFrom={10} durationMs={650}>
        <h2 className="block sm:hidden text-2xl font-semibold">
          Чем мы можем помочь вашему бизнесу
        </h2>

        <div className="hidden sm:block">
          <TitleArrow text="Чем мы можем помочь вашему бизнесу" />
        </div>
      </ScrollReveal>

      <ScrollReveal as="div" yFrom={18} scaleFrom={0.99} durationMs={750} delayMs={60}>
        <ProcessList />
      </ScrollReveal>
    </section>
  );
}
