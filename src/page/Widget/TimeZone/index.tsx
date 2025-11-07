import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import PreviewCard from "@/shared/ui/PreviewCard/PreviewCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { STEPS } from "./constants";

export default function TimeZone({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const isIframe = searchParams.embed === "true";

  return (
    <main className="bg-transparent">
      {!isIframe && (
        <>
          <section className="dist-hero">
            <div className="at-container">
              <div className="dist-pill dist-bleed-left">
                Регион по телефону для amoCRM
              </div>

              <h1 className="dist-hero-title">Звоните в правильное время!</h1>

              <p className="dist-hero-sub">
                Автоматически определяйте регион и текущее время клиента по
                номеру телефона. Никогда больше не разбудите клиента в 6 утра
                или не позвоните в полночь!
              </p>

              <div className="dist-cta">
                <a
                  className="dist-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=25f94eb8-f182-4296-b86f-da4e26854b47"
                  target="_blank"
                  rel="noopener"
                >
                  Установить виджет
                </a>
                <ScrollToInstructionLink />
              </div>
            </div>
          </section>

          <PreviewCard
            title="Как это выглядит?"
            subtitle="Виджет автоматически отображается прямо в карточке контакта"
            videoUrl="/widgets/TimeZone/time-zone-demo.gif"
            imageUrl=""
          />
        </>
      )}

      <section
        id="instruction"
        className="ds-how sc-wrapper"
        aria-label="Пошаговая настройка виджета"
      >
        <SettingsCard
          id="settings-distribution"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
        />
      </section>

      {!isIframe && (
        <section className="ds-prefooter">
          <div className="ds-container">
            <ConsultCard />
          </div>
        </section>
      )}
    </main>
  );
}
