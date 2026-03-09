import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, CASE_ITEMS } from "./constants";

const widget = WIDGETS_DATA["t-bank"];

export default function TBank({
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
            <section className="tg-hero">
              <div className="tg-container">
                <h1 className="tg-pill tg-bleed-left">Счета Т‑Банк в amoCRM</h1>

                <h2 className="tg-hero-title">
                  Счёт в amoCRM → ссылка на оплату в Т‑Банке
                </h2>

                <p className="tg-hero-sub">
                  Подключите организацию, авторизуйтесь в Т‑Банке и выберите
                  расчётный счёт — дальше виджет работает в фоне. При создании
                  счёта в amoCRM ссылка на оплату автоматически появляется в
                  сделке, чтобы менеджер мог сразу отправить её клиенту.
                </p>

                <div className="tg-cta">
                  <a
                    className="tg-btn-primary"
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
              title="Почему ручная работа с оплатами тормозит продажи"
              subtitle="Когда ссылка на оплату не в сделке — её сложно найти, отправить повторно и контролировать оплату. Виджет решает это в один сценарий."
              items={PROBLEMS}
            />

            <CaseCard
              title="Как помогает виджет Т‑Банка"
              subtitle="Счёт в amoCRM → ссылка на оплату → клиент оплачивает — всё фиксируется в сделке"
              items={CASE_ITEMS}
            />
          </>
        )}

        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Ниже — подробная инструкция: как подключить Т‑Банк, выбрать счёт и получать ссылку на оплату в amoCRM"
          steps={STEPS}
          showVideo={false}
        />

        {!isIframe && (
          <section className="at-prefooter">
            <div className="at-container">
              <ConsultCard />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
