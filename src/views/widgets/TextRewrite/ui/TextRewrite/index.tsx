import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";
import {
  WidgetHeroActions,
  WidgetHeroBadge,
  WidgetHeroSection,
  WidgetPageTemplate,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["text-rewrite"];
const installHref = widget.clientId
  ? getWidgetInstallUrl(widget.clientId)
  : "https://www.amocrm.ru/";

export default function TextRewrite({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroSection>
            <WidgetHeroBadge>{widget.seoTitle}</WidgetHeroBadge>

            <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
              Переписывайте сообщения в один клик и сохраняйте единый тон
              общения
            </h2>

            <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
              <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Виджет помогает быстро адаптировать черновики под нужный
                  стиль переписки, усиливать формулировки и добавлять
                  call-to-action прямо в карточке сделки.
                </p>
                <WidgetHeroActions
                  installHref={installHref}
                  widgetId={widget.clientId}
                />
              </div>
            </div>
          </WidgetHeroSection>

          <ProblemsCard
            title="Какие задачи решает TextRewrite AI"
            subtitle="Типовые сложности в переписке, которые виджет закрывает автоматически"
            items={PROBLEMS}
          />

          <CaseCard
            title="Как виджет помогает в ежедневной работе"
            subtitle="Ускоряйте ответы и удерживайте качество коммуникации на каждом этапе воронки"
            items={CASE_ITEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Подключите TextRewrite AI и настройте правила переписывания под ваш процесс:"
          steps={STEPS}
          showVideo={false}
        />
      }
      postInstruction={
        <>
          <FeaturesCard
            className="pt-6 pb-14"
            title="Возможности TextRewrite AI"
            subtitle="Инструменты для контроля тона, структуры и скорости подготовки ответов"
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
      }
      consult={false}
    />
  );
}
