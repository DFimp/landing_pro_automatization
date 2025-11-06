import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ProcessList from "@/widgets/home/homeServiceSection/ui/ProcessList";

export function HomeServicesSection() {
  return (
    <section className="flex flex-col px-4 gap-5 sm:gap-20">
      <h2 className="block sm:hidden text-2xl font-semibold">
        Чем мы можем помочь вашему бизнесу
      </h2>

      <div className="hidden sm:block">
        <TitleArrow text="Чем мы можем помочь вашему бизнесу" />
      </div>

      <ProcessList />
    </section>
  );
}
