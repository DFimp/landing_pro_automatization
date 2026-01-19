import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";

const widget = WIDGETS_DATA['delete-tasks-ban'];

export default function DeleteTasksBan({
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
          areaServed: { name: "Россия" },
        }}
      />
      <main className="bg-transparent">
        {!isIframe && (
          <>
            <section className="tg-hero">
              <div className="tg-container">
                <h1 className="tg-pill tg-bleed-left">
                  Запрет удаления задач в amoCRM
                </h1>

              <h2 className="tg-hero-title">
                Перестаньте терять задачи и историю работы с клиентами
              </h2>

              <p className="tg-hero-sub">
                Виджет блокирует удаление и изменение задач для выбранных
                менеджеров, с гибкими исключениями по типам задач. Сохраните
                честную аналитику и полную историю коммуникаций в amoCRM.
              </p>

              <div className="tg-cta">
                <a
                  className="tg-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=2a208537-35b9-4b8c-805c-e698198f00e9"
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
            title="Проблемы с удалением задач в amoCRM"
            subtitle="Когда задачи можно удалить, вы теряете контроль над процессом"
            items={PROBLEMS}
          />

          <CaseCard
            title="Как виджет решает эти проблемы"
            subtitle="Жёсткий контроль задач без потери гибкости для руководителей"
            items={CASE_ITEMS}
          />
        </>
      )}

      <SettingsCard
        id="instruction"
        title="Пошаговая настройка виджета"
        subtitle="Следуйте простым шагам, чтобы настроить запрет удаления задач:"
        steps={STEPS}
        showVideo
      />

      {!isIframe && (
        <>
          <FeaturesCard
            title="Возможности виджета"
            subtitle="Инструменты для защиты задач и прозрачной аналитики"
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
