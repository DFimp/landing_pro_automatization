import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import ScrollToInstructionLink from "@/sections/landing/scrollToInstructionLink/ScrollToInstructionLink";import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton, WidgetPageTemplate } from "@/features/widget-page";

const widget = WIDGETS_DATA["duplicate-contacts"];

export default function DuplicateContacts({
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
                  Дубли контактов (объединение дублей контактов) в amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Избавиться от дублей контактов?
                </h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Автоматическое склеивание дублированных контактов с умными
                  алгоритмами поиска. Экономьте время менеджеров и улучшайте
                  качество вашей базы контактов.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId!)}>
                    Установить виджет
                  </WidgetInstallButton>
                  <ScrollToInstructionLink />
                </div>
              </WidgetHeroSection>

            <ProblemsCard
              title="Проблемы дублей в amoCRM"
              subtitle="Дубли в amoCRM создают хаос в работе отдела продаж"
              items={PROBLEMS}
            />

            <CaseCard
              title="Решение всех проблем"
              subtitle="Умные алгоритмы для автоматического объединения дублей"
              items={CASE_ITEMS}
            />
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
          videoId="587c58e4cffc051492375d0622e56822"
        />
      )}
      postInstruction={(
          <>
            <FeaturesCard
              className="pt-6 pb-14"
              title="Дополнительные возможности"
              subtitle="Уникальные функции для максимальной скорости и удобства"
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
