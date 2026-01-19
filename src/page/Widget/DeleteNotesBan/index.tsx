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

const widget = WIDGETS_DATA['delete-notes-ban'];

export default function DeleteNotesBan({
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
                                    Запрет удаления и редактирования примечаний в amoCRM
                                </h1>

                            <h2 className="tg-hero-title">
                                Сохраните историю коммуникаций и договорённостей с клиентом
                            </h2>

                            <p className="tg-hero-sub">
                                Виджет блокирует удаление и изменение примечаний для выбранных
                                менеджеров. Никаких «правок задним числом» и пропавших
                                комментариев — вся история по клиенту остаётся в amoCRM.
                            </p>

                            <div className="tg-cta">
                                <a
                                    className="tg-btn-primary"
                                    href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=0be96111-a8e0-4e5c-9a7b-554336deec05"
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
                        title="Проблемы с примечаниями в amoCRM"
                        subtitle="Когда примечания можно менять и удалять, вы теряете контроль над историей"
                        items={PROBLEMS}
                    />

                    <CaseCard
                        title="Как виджет решает эти проблемы"
                        subtitle="Защита истории общения без ломки стандартного интерфейса amoCRM"
                        items={CASE_ITEMS}
                    />
                </>
            )}

            <SettingsCard
                id="instruction"
                title="Пошаговая настройка виджета"
                subtitle="Следуйте простым шагам, чтобы настроить запрет удаления и редактирования примечаний:"
                steps={STEPS}
                showVideo
            />

            {!isIframe && (
                <>
                    <FeaturesCard
                        title="Возможности виджета"
                        subtitle="Инструменты для защиты примечаний и прозрачной истории коммуникаций"
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
