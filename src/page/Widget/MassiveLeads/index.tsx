import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, FEATURES } from "./constants";

const widget = WIDGETS_DATA['massive-leads'];

export default function MassiveLeads({
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
          name: widget.title,
          description: widget.description,
          areaServed: { name: "Россия" },
        }}
      />
      <main className="bg-transparent">
        {!isIframe && (
          <>
            <section className="dist-hero">
              <div className="at-container">
                <h1 className="dist-pill dist-bleed-left">
                  Массовое создание сделок в amoCRM
                </h1>

              <h2 className="dist-hero-title">
                Создавайте сотни сделок за секунды!
              </h2>

              <p className="dist-hero-sub">
                Автоматизируйте создание сделок для всех ваших контактов одним
                нажатием. Забудьте о рутинной работе — виджет сделает всё за вас
                быстро и без ошибок.
              </p>

              <div className="dist-cta">
                <a
                  className="dist-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=48c94f76-e88e-4cb5-ad9c-a8a8c53e5a64"
                  target="_blank"
                  rel="noopener"
                >
                  Установить виджет
                </a>
                <ScrollToInstructionLink />
              </div>
            </div>
          </section>

          <FeaturesCard
            title="Почему наш виджет незаменим?"
            subtitle="Мощные функции для максимальной эффективности продаж"
            items={FEATURES}
          />

          <ProblemsCard
            title="Когда виджет особенно полезен?"
            subtitle="Реальные сценарии использования в бизнесе"
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
