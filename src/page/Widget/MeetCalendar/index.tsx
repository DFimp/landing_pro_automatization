import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";

const widget = WIDGETS_DATA["meet-calendar"];

export default function MeetingCalendarPage({
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
            <section className="dist-hero">
              <div className="at-container meet-calendar-hero">
                <h1 className="dist-pill dist-bleed-left">
                  Календарь записей/встреч для amoCRM
                </h1>

                <h2 className="dist-hero-title">
                  Создавайте встречи по триггеру и вручную
                </h2>

                <p className="dist-hero-sub">{widget.description}</p>

                <div className="dist-cta">
                  {widget.clientId ? (
                    <a
                      className="dist-btn-primary"
                      href={getWidgetInstallUrl(widget.clientId)}
                      target="_blank"
                      rel="noopener"
                    >
                      Установить виджет
                    </a>
                  ) : null}
                  <ScrollToInstructionLink />
                </div>
              </div>
            </section>

            <ProblemsCard
              title="Что мешает организовать встречи"
              subtitle="Календарь встреч решает типичные проблемы команд продаж."
              items={PROBLEMS}
            />

            <CaseCard
              title="Как это работает на практике"
              subtitle="Автоматизация встреч в amoCRM без лишней рутины."
              items={CASE_ITEMS}
            />

            {/*
            <PreviewCard
              title="Посмотрите, как выглядит календарь"
              subtitle="Управляйте встречами прямо в amoCRM и не теряйте контекст сделок."
            />
            */}
          </>
        )}

        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 шага"
          subtitle="Следуйте инструкции, чтобы быстро подключить и начать пользоваться:"
          steps={STEPS}
          showVideo={false}
        />

        {!isIframe && (
          <>
            <FeaturesCard
              title="Ключевые возможности"
              subtitle="Все, что нужно для управления встречами в amoCRM."
              items={FEATURES}
            />

            <section className="ds-prefooter">
              <div className="ds-container">
                <ConsultCard />
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
