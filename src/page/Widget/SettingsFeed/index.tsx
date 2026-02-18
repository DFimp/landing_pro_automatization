import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, FEATURES } from "./constants";

const widget = WIDGETS_DATA["setting-feed"];

export default function FeedFilter({
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
                  Фильтр ленты событий в сделке amoCRM
                </h1>

                <h2 className="dist-hero-title">
                  Смотрите только нужные события — без шума и прокрутки
                </h2>

                <p className="dist-hero-sub">
                  Переключайтесь между задачами, примечаниями, письмами,
                  звонками и чатами одним кликом. Виджет скрывает лишнее, прячет
                  пустые даты и автоматически применяет фильтр при догрузке
                  ленты.
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

            <FeaturesCard
              title="Что умеет виджет"
              subtitle="Функции, которые ускоряют работу в каждой сделке"
              items={FEATURES}
            />

            <ProblemsCard
              title="Когда фильтр особенно полезен"
              subtitle="Типовые ситуации, где экономится больше всего времени"
              items={PROBLEMS}
            />
          </>
        )}

        <SettingsCard
          id="instruction"
          title="Как начать пользоваться за 3 минуты"
          subtitle="Следуйте простым шагам — и фильтр появится в карточке сделки:"
          steps={STEPS}
          showVideo={false}
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
