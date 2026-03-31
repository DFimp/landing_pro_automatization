import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { STEPS, FEATURES, PROBLEMS, CASE_ITEMS } from "./constants";
import Link from "next/link";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { WidgetHeroActions, WidgetHeroSection, WidgetPageTemplate, WidgetTariffsSection } from "@/features/widget-page";

const widget = WIDGETS_DATA["duplicate-leads"];

export default function DuplicateLeads({
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
                <h1
                  className="at-pill at-bleed-left inline-flex items-center gap-2 px-[18px] py-[10px] text-[14px] leading-none bg-[#2847ff] text-[#dfe7ff] rounded-full max-[480px]:box-border max-[480px]:justify-center max-[480px]:px-4 max-[480px]:py-[12px] max-[480px]:text-[12px]"
                  style={{
                    marginLeft: "calc(50% - 50vw)",
                    paddingLeft: "calc(49.5vw - 50% + 16px)",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Дубли сделок (объединение дублей сделок) в amoCRM
                </h1>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">Навести порядок в сделках?</h2>

                <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
                <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Автоматическое склеивание дублированных сделок с сохранением
                  всех важных данных. Экономьте время менеджеров и улучшайте
                  качество вашей базы данных.
                </p>
                                <WidgetHeroActions
                  installHref={getWidgetInstallUrl(widget.clientId!)}
                  extraActions={(
                    <Link
                      className="text-[#cfd6ea] border-b border-[rgba(207,214,234,0.35)] pb-[2px] text-[16px] transition-colors hover:text-white hover:border-[rgba(255,255,255,0.6)] max-[480px]:inline-flex max-[480px]:items-center max-[480px]:justify-center max-[480px]:h-11 max-[480px]:px-[22px] max-[480px]:bg-[#386bff] max-[480px]:text-white max-[480px]:font-semibold max-[480px]:rounded-full max-[480px]:border-0 max-[480px]:shadow-[0_8px_24px_rgba(56,107,255,0.35)]"
                      href="/articles/duplicate-leads"
                    >
                      Статья
                    </Link>
                  )}
                  widgetId={widget.clientId}
                />
                </div>
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
          videoId="a0134e2bd2cac580d5d312b60d0874fb"
        />
      )}
      postInstruction={(
          <>
            <FeaturesCard
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
