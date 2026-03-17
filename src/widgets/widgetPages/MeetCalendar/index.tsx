import React from "react";
import SettingsCard from "@/widgets/landing/settingsCard/SettingsCard";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import CaseCard from "@/widgets/landing/caseCard/CaseCard";
import ProblemsCard from "@/widgets/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/widgets/landing/featuresCard/FeaturesCard";
import ScrollToInstructionLink from "@/widgets/landing/scrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton } from "@/widgets/widgetPages/shared";

const widget = WIDGETS_DATA["meet-calendar"];

export default function MeetingCalendarPage({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const isIframe = searchParams.embed === "true";

  return (
    <>
      <ServiceSchemaTag
        data={{
          serviceType: "Разработка виджетов amoCRM",
          name: widget.seoTitle,
          description: widget.description,
        }}
      />
      <main className="bg-transparent">
        {!isIframe && (
          <>
            <WidgetHeroSection>
                <WidgetHeroBadge>
                  Календарь записей/встреч для amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Создавайте встречи по триггеру и вручную
                </h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">{widget.description}</p>

                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  {widget.clientId ? (
                    <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId)}>
                      Установить виджет
                    </WidgetInstallButton>
                  ) : null}
                  <ScrollToInstructionLink />
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

        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 шага"
          subtitle="Следуйте инструкции, чтобы быстро подключить и начать пользоваться:"
          steps={STEPS}
          showVideo={false}
        />

        {!isIframe && (
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
      </main>
    </>
  );
}
