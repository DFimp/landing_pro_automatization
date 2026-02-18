import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, CASE_ITEMS } from "./constants";

const widget = WIDGETS.find((w) => w.key === "hiding-data")!;

export default function HidingData({
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
                <h1 className="tg-pill tg-bleed-left">Скрытие данных в amoCRM</h1>

                <h2 className="tg-hero-title">
                  Ограничьте видимость интерфейса для разных сотрудников без сложных прав
                </h2>

                <p className="tg-hero-sub">
                  Скрывайте пункты меню, воронки и этапы, поля в карточках и блоки по логике тегов.
                  Настройки применяются для каждого пользователя отдельно и работают в режимах:
                  без ограничений, черный список и белый список.
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
              title="Зачем скрывать данные в amoCRM"
              subtitle="Частые сценарии, где ограничения видимости экономят время и снижают риски"
              items={PROBLEMS}
            />

            <CaseCard
              title="Что дает виджет"
              subtitle="Простой контроль видимости без ручной правки интерфейса"
              items={CASE_ITEMS}
            />
          </>
        )}

        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам, чтобы настроить ограничения для пользователей:"
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

