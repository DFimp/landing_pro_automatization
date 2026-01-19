import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { STEPS, FEATURES, PROBLEMS, CASE_ITEMS } from "./constants";
import Link from "next/link";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";

const widget = WIDGETS_DATA["duplicate-leads"];

export default function DuplicateLeads({
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
            <section className="tg-hero">
              <div className="tg-container">
                <h1 className="tg-pill tg-bleed-left">
                  Дубли сделок (объединение дублей сделок) в amoCRM
                </h1>

                <h2 className="tg-hero-title">Навести порядок в сделках?</h2>

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
                  <Link
                    className="article-btn-link"
                    href="/articles/duplicate-leads"
                    target="_blank"
                  >
                    Статья
                  </Link>
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
          videoId="a0134e2bd2cac580d5d312b60d0874fb"
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
    </>
  );
}
