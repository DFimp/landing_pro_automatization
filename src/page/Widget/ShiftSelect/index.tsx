import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import PreviewCard from "@/shared/ui/PreviewCard/PreviewCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA } from "@/shared/constants/widgets";
import { STEPS } from "./constants";

const widget = WIDGETS_DATA['shift-select'];

export default function ShiftSelect({
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
                        <section className="dist-hero">
                            <div className="at-container">
                                <h1 className="dist-pill dist-bleed-left">
                                    Групповое выделение (Shift-выбор) для amoCRM
                                </h1>

                            <h2 className="dist-hero-title">
                                Выделяйте десятки сделок и контактов за пару секунд
                            </h2>

                            <p className="dist-hero-sub">
                                Виджет добавляет удобное выделение чекбоксов по Shift и
                                протягиванием мышью в списках amoCRM. Ускорьте массовое
                                изменение ответственных, статусов и запуск автоматизаций.
                            </p>

                            <div className="dist-cta">
                                <a
                                    className="dist-btn-primary"
                                    href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=d466e907-bb7e-468b-8420-b9f165221627"
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
                        title="Как это работает?"
                        subtitle="После установки виджета в списках amoCRM вы сможете выделять сущности с зажатым Shift при наведении на чекбоксы, а также протягивать мышью с зажатой левой кнопкой и моментально выбирать целые диапазоны."
                        videoUrl="/widgets/ShiftSelect/shift-select.gif"
                    />
                </>
            )}

            <SettingsCard
                id="instruction"
                title="Как начать пользоваться за 1 минуту"
                subtitle="Следуйте простым шагам, чтобы включить групповой выбор чекбоксов в amoCRM:"
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
        </>
    );
}
