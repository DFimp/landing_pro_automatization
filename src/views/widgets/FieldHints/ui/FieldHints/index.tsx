import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";
import { WidgetHeroActions, WidgetHeroSection, WidgetPageTemplate } from "@/features/widget-page";

const widget = WIDGETS_DATA["field-hints"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export default function FieldHints({
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
            <h1
              className="at-pill at-bleed-left inline-flex items-center gap-2 px-[18px] py-[10px] text-[14px] leading-none bg-[#2847ff] text-[#dfe7ff] rounded-full max-[480px]:box-border max-[480px]:justify-center max-[480px]:px-4 max-[480px]:py-[12px] max-[480px]:text-[12px]"
              style={{
                marginLeft: "calc(50% - 50vw)",
                paddingLeft: "calc(49.5vw - 50% + 16px)",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              Подсказки для этапов и полей в amoCRM
            </h1>

            <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
              Сделайте воронки и карточки понятными для всей команды
            </h2>

            <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
              <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Виджет добавляет значок подсказки к выбранным этапам воронки и полям в карточке сделки.
                  Менеджер наводит курсор и сразу видит, что означает этап, как заполнять поле и на что обратить внимание.
                  Меньше ошибок, быстрее адаптация новых сотрудников и единый стандарт работы в CRM.
                </p>
                <WidgetHeroActions
                  installHref={installHref}
                  widgetId={widget.clientId}
                />
              </div>
            </div>
          </WidgetHeroSection>

          <ProblemsCard
            title="Почему без подсказок в CRM возникают ошибки"
            subtitle="Когда этапы и поля трактуются по-разному, страдает качество воронки и скорость работы"
            items={PROBLEMS}
          />

          <CaseCard
            title="Как виджет помогает команде работать одинаково"
            subtitle="Контекст по этапам и полям появляется прямо в интерфейсе, без инструкций в отдельных файлах"
            items={CASE_ITEMS}
          />
        </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Настройте подсказки по воронкам и полям за несколько шагов:"
          steps={STEPS}
          showVideo={false}
        />
      )}
      postInstruction={(
        <>
          <FeaturesCard
            title="Возможности виджета"
            subtitle="Инструменты, которые помогают стандартизировать работу менеджеров в карточках и воронках"
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
