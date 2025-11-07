import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import PreviewCard from "@/shared/ui/PreviewCard/PreviewCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { STEPS } from "./constants";

export default function СlosingBan({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const isIframe = searchParams.embed === "true";

  return (
    <main className="bg-transparent">
      {!isIframe && (
        <>
          <section className="dist-hero">
            <div className="at-container">
              <div className="dist-pill dist-bleed-left">
                Запрет закрытия задач без результата для amoCRM
              </div>

              <h1 className="dist-hero-title">Нет задачам без результата!</h1>

              <p className="dist-hero-sub">
                Виджет не даст закрыть задачу без описания результата. Полная
                прозрачность работы команды и контроль качества выполнения.
              </p>

              <div className="dist-cta">
                <a
                  className="dist-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=05248753-81ac-40a2-94fb-e0b7c6d05092"
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
            subtitle="После установки виджета при попытке закрыть задачу пустое поле с результатом подсвечивается красным, и кнопка закрытия не срабатывает. Можно задать минимальное количество символов для текста с результатом."
            videoUrl="/widgets/ClosingBan/closing-ban.gif"
          />
        </>
      )}

      <SettingsCard
        id="instruction"
        title="Как настроить виджет за 3 минуты"
        subtitle="Следуйте простым шагам для быстрой настройки:"
        steps={STEPS}
        showVideo
      />

      {!isIframe && (
        <section className="ds-prefooter">
          <div className="ds-container">
            <ConsultCard />
          </div>
        </section>
      )}
    </main>
  );
}
