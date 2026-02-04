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

const widget = WIDGETS_DATA["copying-fields"];

export default function CopyingFields({
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
        }}
      />
      <main className="bg-transparent">
        {!isIframe && (
          <>
            <section className="dist-hero">
              <div className="at-container">
                <h1 className="dist-pill dist-bleed-left">
                  Копирование полей между аккаунтами и удаление полей списком в amoCRM без рутины
                </h1>

                <h2 className="dist-hero-title">
                  Переносите поля между сделками, контактами и компаниями. Удаляйте поля списком
                </h2>

                <p className="dist-hero-sub">
                  Виджет позволяет быстро копировать и вставлять пользовательские поля между
                  сущностями, сохраняя структуру, типы и порядок. Никаких ручных повторов —
                  всё делается в пару кликов и сразу видно результат.
                </p>

                <div className="dist-cta">
                  <a
                    className="dist-btn-primary"
                    href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=29fb59ab-297e-4a2e-a441-e6dda149240f"
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
              subtitle="Понятные действия и быстрый результат в настройках полей"
              items={FEATURES}
            />

            <ProblemsCard
              title="Когда виджет особенно полезен?"
              subtitle="Сценарии, где копирование полей экономит часы работы"
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
