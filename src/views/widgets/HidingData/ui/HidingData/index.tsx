import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import { WIDGETS, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, CASE_ITEMS } from "./constants";
import { WidgetHeroActions, WidgetHeroBadge, WidgetHeroSection, WidgetPageTemplate, WidgetTariffs } from "@/features/widget-page";

const widget = WIDGETS.find((w) => w.key === "hiding-data")!;

export default function HidingData({
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
                <WidgetHeroBadge>Скрытие данных в amoCRM</WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Ограничьте видимость интерфейса для разных сотрудников без сложных прав
                </h2>

                <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
                <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Скрывайте пункты меню, воронки и этапы, поля в карточках и блоки по логике тегов.
                  Настройки применяются для каждого пользователя отдельно и работают в режимах:
                  без ограничений, черный список и белый список.
                </p>
                                <WidgetHeroActions
                  installHref={getWidgetInstallUrl(widget.clientId!)}
                  widgetId={widget.clientId}
                />
                </div>
                <WidgetTariffs widgetId={widget.clientId!} />
                </div>
</WidgetHeroSection>

            <ProblemsCard
              title="Зачем скрывать данные в amoCRM"
              subtitle="Частые сценарии, где ограничения видимости экономят время и снижают риски"
              items={PROBLEMS}
            />

            <CaseCard
              title="Что дает виджет"
              subtitle="Простой контроль видимости без ручной правки интерфейса"
              items={CASE_ITEMS}
            />
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам, чтобы настроить ограничения для пользователей:"
          steps={STEPS}
          showVideo={false}
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
