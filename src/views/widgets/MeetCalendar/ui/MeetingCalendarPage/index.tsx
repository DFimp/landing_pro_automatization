import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";
import { WidgetHeroActions, WidgetHeroBadge, WidgetHeroSection, WidgetPageTemplate, WidgetTariffsSection } from "@/features/widget-page";

const widget = WIDGETS_DATA["meet-calendar"];

export default function MeetingCalendarPage({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {

  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      tariffs={(<WidgetTariffsSection widgetId={widget.clientId!} />)}
      preInstruction={(
          <>
            <WidgetHeroSection>
                <WidgetHeroBadge>
                  Календарь записей/встреч для amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Создавайте встречи по триггеру и вручную
                </h2>

                <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
                <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">{widget.description}</p>
                                <WidgetHeroActions
                  installHref={widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined}
                  widgetId={widget.clientId}
                />
                </div>
                </div>
              </WidgetHeroSection>

            <ProblemsCard
              title="Что мешает организовать встречи"
              subtitle="Календарь встреч решает типичные проблемы команд продаж."
              items={PROBLEMS}
            />

            <CaseCard
              title="Как это работает на практике"
              subtitle="Автоматизация встреч в amoCRM без лишней рутины."
              items={CASE_ITEMS}
            />

            {/*
            <PreviewCard
              title="Посмотрите, как выглядит календарь"
              subtitle="Управляйте встречами прямо в amoCRM и не теряйте контекст сделок."
            />
            */}
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 шага"
          subtitle="Следуйте инструкции, чтобы быстро подключить и начать пользоваться:"
          steps={STEPS}
          showVideo={false}
        />
      )}
      postInstruction={(
          <>
            <FeaturesCard
              title="Ключевые возможности"
              subtitle="Все, что нужно для управления встречами в amoCRM."
              items={FEATURES}
            />

            <section
              className="bg-white"
              style={{ paddingTop: 24, paddingBottom: 72 }}
            >
              <div className="mx-auto w-full max-w-[1200px] px-4">
                <ConsultCard />
              </div>
            </section>
          </>
      )}
      consult={false}
    />
  );
}
