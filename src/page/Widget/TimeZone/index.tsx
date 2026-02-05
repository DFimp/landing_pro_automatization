import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import PreviewCard from "@/shared/ui/PreviewCard/PreviewCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS } from "./constants";

const widget = WIDGETS_DATA["time-zone"];

export default function TimeZone({
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
                  Регион по телефону для amoCRM
                </h1>

                <h2 className="dist-hero-title">Звоните в правильное время!</h2>

                <p className="dist-hero-sub">
                  Автоматически определяйте регион и текущее время клиента по
                  номеру телефона. Никогда больше не разбудите клиента в 6 утра
                  или не позвоните в полночь!
                </p>

                <div className="dist-cta">
                  <a
                    className="dist-btn-primary"
                    href={getWidgetInstallUrl(widget.clientId!)}
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

        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
          videoId="d7b3dd2910f7129214500d477d347a93"
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
