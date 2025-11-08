import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";

export default function DuplicateContacts({
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
              <h1 className="tg-pill tg-bleed-left">
                Дубли контактов (объединение дублей контактов) в amoCRM
              </h1>

              <h2 className="tg-hero-title">Избавиться от дублей контактов?</h2>

              <p className="tg-hero-sub">
                Автоматическое склеивание дублированных контактов с умными
                алгоритмами поиска. Экономьте время менеджеров и улучшайте
                качество вашей базы контактов.
              </p>

              <div className="tg-cta">
                <a
                  className="tg-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=e6a1837c-6178-4a0c-9fc0-3e5768595fa2"
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

      <SettingsCard
        id="instruction"
        title="Пошаговая настройка виджета"
        subtitle="Следуйте простым шагам для быстрой настройки:"
        steps={STEPS}
        showVideo
      />

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
