import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import CaseCard from "@/shared/ui/Case/CaseCard";
import ProblemsCard from "@/shared/ui/ProblemsCard/ProblemsCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, CASE_ITEMS } from "./constants";

const widget = WIDGETS_DATA['group-fields'];

export default function GroupFields({
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
                                    Группировка полей в карточке сделки в amoCRM
                                </h1>

                            <h2 className="tg-hero-title">
                                Наведи порядок в полях и ускорь работу менеджеров
                            </h2>

                            <p className="tg-hero-sub">
                                Автоматически группируйте поля в карточке сделки по логическим
                                блокам. Удобная навигация, меньше прокрутки, быстрый доступ к
                                нужной информации даже при большом количестве полей.
                            </p>

                            <div className="tg-cta">
                                <a
                                    className="tg-btn-primary"
                                    href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=b54cc436-b04d-438c-b80f-e8ca06f9265b"
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
                        title="Проблемы с большим количеством полей"
                        subtitle="Нагруженные карточки сделок мешают эффективной работе менеджеров"
                        items={PROBLEMS}
                    />

                    <CaseCard
                        title="Как помогает группировка полей"
                        subtitle="Структурированная карточка сделки — быстрее, понятнее, удобнее"
                        items={CASE_ITEMS}
                    />
                </>
            )}

            <SettingsCard
                id="instruction"
                title="Пошаговая настройка виджета"
                subtitle="Следуйте простым шагам, чтобы навести порядок в карточке сделки:"
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
