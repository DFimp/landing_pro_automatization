import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { STEPS, CASE_ITEMS, PROBLEMS } from "./constants";

export default function Distribution({
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
          name: "Распределение сделок в amoCRM",
          description: "Виджет для автоматического распределения сделок между менеджерами по правилам с учетом нагрузки и приоритетов",
          provider: { name: "Про Автоматизацию" },
          areaServed: { name: "Россия" },
        }}
      />
      <main className="bg-transparent">
        {!isIframe && (
          <>
            <section className="dist-hero">
              <div className="at-container">
                <Breadcrumbs
                  items={[
                    { name: "Главная", href: "/" },
                    { name: "Виджеты", href: "/widgets" },
                    { name: "Распределение сделок", href: "/widgets/lead-distribution" },
                  ]}
                />
                <h1 className="dist-pill dist-bleed-left">
                  Распределение сделок в amoCRM
                </h1>

              <h2 className="dist-hero-title">
                Справедливо распределить нагрузку?
              </h2>

              <p className="dist-hero-sub">
                Автоматическое распределение новых сделок между менеджерами по
                процентам, максимальному количеству или равными долями. Учёт
                контактов, компаний и активности менеджеров.
              </p>

              <div className="dist-cta">
                <a
                  className="dist-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=9bd50964-9b79-40a5-b786-59c079f7edc8"
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
            title="Проблемы неравномерного распределения"
            subtitle="Ручное распределение сделок создаёт хаос и несправедливость"
            items={PROBLEMS}
          />

          <CaseCard
            title="Решение всех проблем"
            subtitle="Умные алгоритмы для справедливого распределения сделок"
            items={CASE_ITEMS}
          />
        </>
      )}
      
      <SettingsCard
        id="instruction"
        title="Как настроить виджет за 3 минуты"
        subtitle="Следуйте простым шагам для быстрой настройки:"
        steps={STEPS}
        showVideo
        videoId="b9b542ff41657b10b50987b118fe3920"
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
