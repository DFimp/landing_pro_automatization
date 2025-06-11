import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import FeaturesList from "@/widgets/home/homeFeaturesSection/ui/FeatureList";
import IndustryCards from "@/widgets/home/homeFeaturesSection/ui/IndustryCards";

export function HomeFeaturesSection() {
  return (
    <section className="flex flex-col gap-20 mt-20">
      <StickyInfo
        className="max-w-[1250px]"
        text="amoCRM предлагает широкий спектр функций, которые помогают управлять продажами,
                    автоматизировать процессы и улучшать взаимодействие с клиентами."
      />
      <div className="container flex flex-col gap-20">
        <FeaturesList />
        <IndustryCards />
      </div>
    </section>
  );
}
