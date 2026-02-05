import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import PreviewCard from "@/shared/ui/PreviewCard/PreviewCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";

const widget = WIDGETS_DATA["telegram-button"];

export default function TelegramButton({
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
                  Мгновенный переход в Telegram из amoCRM
                </h1>

                <h2 className="dist-hero-title">
                  Написать в Telegram за 1 клик?
                </h2>

                <p className="dist-hero-sub">
                  Превратите каждый номер телефона в прямую ссылку на чат с
                  клиентом в Telegram. Больше никакого копирования номеров и
                  поиска контактов!
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

            <ProblemsCard
              title="Проблемы традиционного способа"
              subtitle="Почему менеджеры теряют время и клиентов при работе с Telegram"
              items={PROBLEMS}
            />

            <CaseCard
              title="Решение всех проблем"
              subtitle="Умные алгоритмы для автоматического объединения дублей"
              items={CASE_ITEMS}
            />

            <PreviewCard
              title="Как это выглядит?"
              subtitle="Виджет автоматически отображается прямо в карточке контакта"
              imageUrl="/widgets/TelegramButton/Telegram.png"
            />
          </>
        )}

        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
          videoId="c784467a56b528b34b435a328ceb097e"
        />

        {!isIframe && (
          <>
            <FeaturesCard
              title="Дополнительные возможности"
              subtitle="Уникальные функции для максимальной скорости и удобства"
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
