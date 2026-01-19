import "./style.css";
import React from "react";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import HowItWorksScroll from "./ui/HowItWorksScroll";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, FEATURES } from "./constants";

const widget = WIDGETS_DATA['auto-tasks'];

export default function AutoTask({
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
            <section className="at-hero">
              <div className="at-container">
                <h1 className="at-pill at-bleed-left">
                  Автозадачи в сделках для amoCRM
                </h1>

              <h2 className="at-hero-title">Никогда не забывайте о сделках!</h2>

              <p className="at-hero-sub">
                Автоматически создавайте задачи для сделок без активности.
                <br />
                Настраиваемые статусы, типы задач и ответственные.
                <br />
                Увеличьте конверсию на <span className="at-badge">
                  35%
                </span>{" "}
                благодаря своевременному контакту
                <br />с клиентами.
              </p>

              <div className="at-cta">
                <a
                  className="at-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=ffb5b225-672a-4016-b868-6a98db446851"
                  target="_blank"
                  rel="noopener"
                >
                  Установить виджет
                </a>
                <ScrollToInstructionLink />
              </div>

              <div className="at-stats">
                <div className="at-stat">
                  <div className="at-stat-value">+35%</div>
                  <div className="at-stat-label">Рост конверсии</div>
                </div>
                <div className="at-stat">
                  <div className="at-stat-value">0</div>
                  <div className="at-stat-label">Забытых сделок</div>
                </div>
                <div className="at-stat">
                  <div className="at-stat-value">5 мин</div>
                  <div className="at-stat-label">На настройку</div>
                </div>
              </div>
            </div>
          </section>
          <ProblemsCard
            title="Проблемы традиционного способа"
            subtitle="Почему менеджеры теряют время и клиентов при работе с WhatsApp"
            items={PROBLEMS}
          />

          <section className="at-solution">
            <FeaturesCard
              title="Решение: Автозадачи в сделках"
              subtitle="Виджет автоматически следит за всеми сделками и создаёт задачи для «спящих» клиентов"
              items={FEATURES}
            />
          </section>

          <HowItWorksScroll />
        </>
      )}

      <SettingsCard
        id="instruction"
        title="Пошаговая настройка виджета"
        subtitle="Следуйте простым шагам для быстрой настройки:"
        steps={STEPS}
        showVideo
        videoId="68a9811758740029cb2c7a3e3d885869"
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
