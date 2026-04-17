import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { CASE_ITEMS, PROBLEMS, STEPS } from "./constants";
import {
  WidgetHeroActions,
  WidgetHeroBadge,
  WidgetHeroSection,
  WidgetPageTemplate,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["payment-checker"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export default function PaymentChecker({
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
            <WidgetHeroBadge>Проверка оплат в amoCRM</WidgetHeroBadge>

            <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
              Автоматически связывайте платежи с нужной сделкой и запускайте Salesbot без ручного поиска
            </h2>

            <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
              <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Виджет проверяет назначения платежей, извлекает значение по заданному паттерну и ищет соответствующую сделку в amoCRM.
                  После совпадения автоматически запускается выбранный Salesbot. Вы получаете предсказуемую обработку оплат,
                  одинаковые правила для всей команды и меньше ручных ошибок в финансовых процессах.
                </p>
                <WidgetHeroActions installHref={installHref} widgetId={widget.clientId} />
              </div>
            </div>
          </WidgetHeroSection>

          <ProblemsCard
            title="Какие проблемы закрывает виджет"
            subtitle="Где чаще всего теряются оплаты, если обработка остается ручной"
            items={PROBLEMS}
          />

          <CaseCard
            title="Что вы получаете после настройки"
            subtitle="Контроль маршрута оплаты: от назначения платежа до запуска нужного сценария в amoCRM"
            items={CASE_ITEMS}
          />
        </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Подробная инструкция по настройке"
          subtitle="Пошагово: от создания организации до правил поиска оплаты и запуска Salesbot"
          steps={STEPS}
          showVideo={false}
        />
      )}
      postInstruction={(
        <section className="bg-white" style={{ paddingTop: 24, paddingBottom: 72 }}>
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <ConsultCard />
          </div>
        </section>
      )}
      consult={false}
    />
  );
}