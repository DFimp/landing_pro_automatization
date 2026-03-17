import React from "react";
import SettingsCard from "@/widgets/landing/settingsCard/SettingsCard";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import CaseCard from "@/widgets/landing/caseCard/CaseCard";
import ProblemsCard from "@/widgets/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/widgets/landing/featuresCard/FeaturesCard";
import ScrollToInstructionLink from "@/widgets/landing/scrollToInstructionLink/ScrollToInstructionLink";
import { STEPS, FEATURES, PROBLEMS, CASE_ITEMS } from "./constants";
import Link from "next/link";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { WidgetHeroSection, WidgetInstallButton } from "@/widgets/widgetPages/shared";

const widget = WIDGETS_DATA["duplicate-leads"];

export default function DuplicateLeads({
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

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Автоматическое склеивание дублированных сделок с сохранением
                  всех важных данных. Экономьте время менеджеров и улучшайте
                  качество вашей базы данных.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId!)}>
                    Установить виджет
                  </WidgetInstallButton>
                  <Link
                    className="text-[#cfd6ea] border-b border-[rgba(207,214,234,0.35)] pb-[2px] text-[16px] transition-colors hover:text-white hover:border-[rgba(255,255,255,0.6)] max-[480px]:inline-flex max-[480px]:items-center max-[480px]:justify-center max-[480px]:h-11 max-[480px]:px-[22px] max-[480px]:bg-[#386bff] max-[480px]:text-white max-[480px]:font-semibold max-[480px]:rounded-full max-[480px]:border-0 max-[480px]:shadow-[0_8px_24px_rgba(56,107,255,0.35)]"
                    href="/articles/duplicate-leads"
                  >
                    Статья
                  </Link>
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

        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
          videoId="a0134e2bd2cac580d5d312b60d0874fb"
        />

        {!isIframe && (
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
      </main>
    </>
  );
}
