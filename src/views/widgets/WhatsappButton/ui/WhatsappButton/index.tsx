import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import PreviewCard from "@/sections/landing/previewCard/PreviewCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";
import { WidgetHeroActions, WidgetHeroBadge, WidgetHeroSection, WidgetPageTemplate, WidgetTariffs } from "@/features/widget-page";

const widget = WIDGETS_DATA["whatsapp-button"];

export default function WhatsappButton({
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
                  Мгновенный переход в WhatsApp из amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Написать в WhatsApp за 1 клик?
                </h2>

                <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
                <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Превратите каждый номер телефона в прямую ссылку на чат с
                  клиентом в WhatsApp. Больше никакого копирования номеров и
                  поиска контактов!
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
              title="Проблемы традиционного способа"
              subtitle="Почему менеджеры теряют время и клиентов при работе с WhatsApp"
              items={PROBLEMS}
            />

            <CaseCard
              title="Решение всех проблем"
              subtitle="Умные алгоритмы для автоматического объединения дублей"
              items={CASE_ITEMS}
            />

            <PreviewCard
              title="Посмотрите, как это работает!"
              subtitle="Просто и понятно - кликнул и уже в чате!"
              videoUrl=""
              imageUrl="/widgets/WhatsappButton/WhatsApp.jpeg"
              hideImageOverlayButton
              mediaContainerClassName="!h-auto max-[768px]:!aspect-auto max-[480px]:!aspect-auto"
              imageClassName="max-w-[1120px]"
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
          videoId="c23a5b096d984804fae92f3314449d67"
        />
      )}
      postInstruction={(
          <>
            <FeaturesCard
              title="Дополнительные возможности"
              subtitle="Уникальные функции для максимальной скорости и удобства"
              items={FEATURES}
            />

            <section className="bg-white" style={{ paddingTop: 24, paddingBottom: 72 }}>
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
