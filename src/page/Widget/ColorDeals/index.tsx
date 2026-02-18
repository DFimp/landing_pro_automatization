import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { FEATURES, PROBLEMS, STEPS } from "./constants";

const widget = WIDGETS_DATA["color-leads"];

export default function ColorDeals({
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
              <div className="at-container">
                <h1 className="dist-pill dist-bleed-left">
                  Окраска сделок для amoCRM
                </h1>

                <h2 className="dist-hero-title">
                  Автоматически выделяйте сделки цветом по правилам
                </h2>

                <p className="dist-hero-sub">
                  Настройте условия (бюджет, этап, теги, пользовательские поля и
                  другие признаки) и подсветите сделки в воронке и в списке.
                  Команда быстрее видит приоритеты и меньше пропускает важное.
                </p>

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

            <FeaturesCard
              title="Что даёт окраска сделок?"
              subtitle="Сильный визуальный сигнал для команды продаж"
              items={FEATURES}
            />

            <ProblemsCard
              title="Когда виджет особенно полезен?"
              subtitle="Типовые ситуации, где окраска экономит время и деньги"
              items={PROBLEMS}
            />
          </>
        )}

        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
        />

        {!isIframe && (
          <section className="ds-prefooter">
            <div className="ds-container">
              <ConsultCard />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
