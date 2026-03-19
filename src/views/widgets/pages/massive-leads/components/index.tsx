import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import ScrollToInstructionLink from "@/sections/landing/scrollToInstructionLink/ScrollToInstructionLink";import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, FEATURES } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton, WidgetPageTemplate } from "@/features/widget-page";

const widget = WIDGETS_DATA["massive-leads"];

export default function MassiveLeads({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {

  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={(
          <>
            <WidgetHeroSection>
                <WidgetHeroBadge>
                  Массовое создание сделок в amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Создавайте сотни сделок за секунды!
                </h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Автоматизируйте создание сделок для всех ваших контактов одним
                  нажатием. Забудьте о рутинной работе — виджет сделает всё за
                  вас быстро и без ошибок.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId!)}>
                    Установить виджет
                  </WidgetInstallButton>
                  <ScrollToInstructionLink />
                </div>
              </WidgetHeroSection>

            <FeaturesCard
              title="Почему наш виджет незаменим?"
              subtitle="Мощные функции для максимальной эффективности продаж"
              items={FEATURES}
            />

            <ProblemsCard
              title="Когда виджет особенно полезен?"
              subtitle="Реальные сценарии использования в бизнесе"
              items={PROBLEMS}
            />
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
        />
      )}
      postInstruction={(
          <section
            className="bg-white"
            style={{ paddingTop: 24, paddingBottom: 72 }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
      )}
      consult={false}
    />
  );
}
