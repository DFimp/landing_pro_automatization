import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import FeaturesCard from "@/shared/ui/FeaturesCard/FeaturesCard";
import PreviewCard from "@/shared/ui/PreviewCard/PreviewCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";

const widget = WIDGETS_DATA['whatsapp-button'];

export default function WhatsappButton({
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
          provider: { name: "Про Автоматизацию" },
          areaServed: { name: "Россия" },
        }}
      />
      <main className="bg-transparent">
      {!isIframe && (
        <>
          <section className="dist-hero">
            <div className="at-container">
              <h1 className="dist-pill dist-bleed-left">
                Мгновенный переход в WhatsApp из amoCRM
              </h1>

              <h2 className="dist-hero-title">
                Написать в WhatsApp за 1 клик?
              </h2>

              <p className="dist-hero-sub">
                Превратите каждый номер телефона в прямую ссылку на чат с
                клиентом в WhatsApp. Больше никакого копирования номеров и
                поиска контактов!
              </p>

              <div className="dist-cta">
                <a
                  className="dist-btn-primary"
                  href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=667e5134-9be1-4ee1-8e02-42eb25230f37"
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
            subtitle="Почему менеджеры теряют время и клиентов при работе с WhatsApp"
            items={PROBLEMS}
          />

          <CaseCard
            title="Решение всех проблем"
            subtitle="Умные алгоритмы для автоматического объединения дублей"
            items={CASE_ITEMS}
          />

          <PreviewCard
            title="Посмотрите, как это работает!"
            subtitle="Просто и понятно - кликнул и уже в чате!"
            videoUrl=""
            imageUrl="/widgets/WhatsappButton/WhatsApp.webp"
          />
        </>
      )}

      <SettingsCard
        id="instruction"
        title="Как настроить виджет за 3 минуты"
        subtitle="Следуйте простым шагам для быстрой настройки:"
        steps={STEPS}
        showVideo
        videoId="c23a5b096d984804fae92f3314449d67"
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
