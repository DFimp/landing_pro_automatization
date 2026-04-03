import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, CASE_ITEMS } from "./constants";
import { WidgetHeroActions, WidgetHeroBadge, WidgetHeroSection, WidgetPageTemplate, WidgetTariffsSection } from "@/features/widget-page";

const widget = WIDGETS_DATA["t-bank"];

export default function TBank({
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
                <WidgetHeroBadge>Счета Т‑Банк в amoCRM</WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Счёт в amoCRM → ссылка на оплату в Т‑Банке
                </h2>

                <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
                <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Подключите организацию, авторизуйтесь в Т‑Банке и выберите
                  расчётный счёт — дальше виджет работает в фоне. При создании
                  счёта в amoCRM ссылка на оплату автоматически появляется в
                  сделке, чтобы менеджер мог сразу отправить её клиенту.
                </p>
                                <WidgetHeroActions
                  installHref={getWidgetInstallUrl(widget.clientId!)}
                  widgetId={widget.clientId}
                />
                </div>
                </div>
              </WidgetHeroSection>

            <ProblemsCard
              title="Почему ручная работа с оплатами тормозит продажи"
              subtitle="Когда ссылка на оплату не в сделке — её сложно найти, отправить повторно и контролировать оплату. Виджет решает это в один сценарий."
              items={PROBLEMS}
            />

            <CaseCard
              title="Как помогает виджет Т‑Банка"
              subtitle="Счёт в amoCRM → ссылка на оплату → клиент оплачивает — всё фиксируется в сделке"
              items={CASE_ITEMS}
            />
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Ниже — подробная инструкция: как подключить Т‑Банк, выбрать счёт и получать ссылку на оплату в amoCRM"
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
