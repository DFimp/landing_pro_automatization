import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { STEPS, FEATURES, PROBLEMS, CASE_ITEMS } from "./constants";

export default function DuplicateLeads({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const isIframe = searchParams.embed === "true";

  return (
    <main className="bg-transparent">
      {!isIframe && (
        <>
          <section className="tg-hero">
            <div className="tg-container">
              <div className="tg-pill tg-bleed-left">
                Дубли сделок (объединение дублей сделок) для amoCRM
              </div>

              <h1 className="tg-hero-title">Навести порядок в сделках?</h1>

              <p className="tg-hero-sub">
                Автоматическое склеивание дублированных сделок с сохранением
                всех важных данных. Экономьте время менеджеров и улучшайте
                качество вашей базы данных.
              </p>

              <div className="tg-cta">
                <a
                  className="tg-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=9036b829-2690-470d-9248-e7c4bb3f6699"
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
            title="Проблемы дублей в amoCRM"
            subtitle="Дубли в amoCRM создают хаос в работе отдела продаж"
            items={PROBLEMS}
          />

          <CaseCard
            title="Решение всех проблем"
            subtitle="Умные алгоритмы для автоматического объединения дублей"
            items={CASE_ITEMS}
          />
        </>
      )}

      <section
        id="instruction"
        className="sc-wrapper"
        aria-label="Пошаговая настройка виджета"
      >
        <SettingsCard
          id="settings-dup"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
        />
      </section>

      {!isIframe && (
        <>
          <FeaturesCard
            title="Дополнительные возможности"
            subtitle="Уникальные функции для максимальной скорости и удобства"
            items={FEATURES}
          />

          <section className="at-prefooter">
            <div className="at-container">
              <ConsultCard />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
