import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import FeaturesList from "@/widgets/home/homeFeaturesSection/ui/FeatureList";
import IndustryCards from "@/widgets/home/homeFeaturesSection/ui/IndustryCards";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export function HomeFeaturesSection() {
  return (
    <section className="flex flex-col sm:gap-20 sm:mt-20 mt-5">
      <ScrollReveal
        as="div"
        variant="wipeX"
        xFrom={-220}
        yFrom={0}
        blurPx={0}
        durationMs={900}
      >
        <StickyInfo
          className="max-w-[1250px] py-5"
          text="amoCRM предлагает широкий спектр функций, которые помогают управлять продажами,
                      автоматизировать процессы и улучшать взаимодействие с клиентами."
        />
      </ScrollReveal>

      <div className="container flex flex-col sm:gap-20 gap-10">
        <FeaturesList />

        <ScrollReveal
          as="div"
          yFrom={16}
          durationMs={650}
          delayMs={80}
        >
          <div className="sm:hidden">
            <TitleArrow text="Для каких сфер" />
          </div>

          <IndustryCards />
        </ScrollReveal>
      </div>
    </section>
  );
}
