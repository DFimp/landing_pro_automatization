import "./style.css";
import React from "react";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { PROBLEMS, STEPS } from "./constants";

const widget = WIDGETS_DATA["docs-flow"];

export default function DocsFlow({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const isIframe = searchParams.embed === "true";
  const installUrl = widget.clientId ? getWidgetInstallUrl(widget.clientId) : null;

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
          <section className="df-hero">
            <div className="df-container">
              <h1 className="df-pill df-bleed-left">
                Автоматическое формирование документов
              </h1>

              <h2 className="df-hero-title">
                Договоры, счета и акты из карточки сделки — в Google Docs
              </h2>

              <p className="df-hero-sub">
                Виджет подставляет данные из amoCRM в шаблоны Google Docs: реквизиты
                клиента, суммы, товары и другие поля. Готовые документы можно
                скачать, отправить клиенту или выгрузить в СБИС для согласования.
              </p>

              <div className="df-cta">
                {installUrl ? (
                  <a
                    className="df-btn-primary"
                    href={installUrl}
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
        )}

        {!isIframe && (
          <div className="df-prb-wrap">
            <ProblemsCard
              title="Как это работает"
              subtitle="Шаблоны Google Docs + данные из amoCRM = готовые документы в пару кликов или по триггеру."
              items={PROBLEMS}
              className="df-prb"
            />
          </div>
        )}

        <SettingsCard
          id="instruction"
          title="Инструкция по настройке"
          subtitle="Следуйте шагам ниже — и вы сможете формировать документы вручную и автоматически."
          steps={STEPS}
          showVideo={false}
        />

        {!isIframe && (
          <section className="df-prefooter">
            <div className="df-container">
              <ConsultCard />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
