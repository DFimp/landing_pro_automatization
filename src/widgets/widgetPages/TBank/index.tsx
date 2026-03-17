import React from "react";
import SettingsCard from "@/widgets/landing/settingsCard/SettingsCard";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import CaseCard from "@/widgets/landing/caseCard/CaseCard";
import ProblemsCard from "@/widgets/landing/problemsCard/ProblemsCard";
import ScrollToInstructionLink from "@/widgets/landing/scrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, CASE_ITEMS } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton } from "@/widgets/widgetPages/shared";

const widget = WIDGETS_DATA["t-bank"];

export default function TBank({
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
                <WidgetHeroBadge>Счета Т‑Банк в amoCRM</WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Счёт в amoCRM → ссылка на оплату в Т‑Банке
                </h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Подключите организацию, авторизуйтесь в Т‑Банке и выберите
                  расчётный счёт — дальше виджет работает в фоне. При создании
                  счёта в amoCRM ссылка на оплату автоматически появляется в
                  сделке, чтобы менеджер мог сразу отправить её клиенту.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId!)}>
                    Установить виджет
                  </WidgetInstallButton>

                  <ScrollToInstructionLink />
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

        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Ниже — подробная инструкция: как подключить Т‑Банк, выбрать счёт и получать ссылку на оплату в amoCRM"
          steps={STEPS}
          showVideo={false}
        />

        {!isIframe && (
          <section
            className="bg-white"
            style={{ paddingTop: 24, paddingBottom: 72 }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
