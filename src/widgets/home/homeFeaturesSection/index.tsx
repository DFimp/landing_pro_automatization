import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import FeaturesList from "@/widgets/home/homeFeaturesSection/ui/FeatureList";
import IndustryCards from "@/widgets/home/homeFeaturesSection/ui/IndustryCards";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";

export function HomeFeaturesSection() {
  return (
    <section className="flex flex-col sm:gap-20 sm:mt-20 mt-5">
      <StickyInfo
        className="max-w-[1250px] py-5"
        text="amoCRM предлагает широкий спектр функций, которые помогают управлять продажами,
                    автоматизировать процессы и улучшать взаимодействие с клиентами."
      />
      <div className="container flex flex-col sm:gap-20 gap-10">
        <FeaturesList />
        <div className="sm:hidden">
          <TitleArrow text="Для каких сфер" />
        </div>
        <IndustryCards />
      </div>
    </section>
  );
}
