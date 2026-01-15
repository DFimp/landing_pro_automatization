import "./style.css";
import React from "react";
import SettingsCard from "@/shared/ui/settings/SettingsCard";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import PreviewCard from "@/shared/ui/PreviewCard/PreviewCard";
import ScrollToInstructionLink from "@/shared/ui/ScrollToInstructionLink/ScrollToInstructionLink";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { STEPS } from "./constants";

export default function TransferFields({
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
                    name: "Перенос полей для amoCRM",
                    description: "Виджет переносит данные между сделками, контактами и компаниями с автоматизацией заполнения",
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
                                        { name: "Перенос полей", href: "/widgets/transfer-fields" },
                                    ]}
                                />
                                <h1 className="dist-pill dist-bleed-left">
                                    Перенос длинных названий полей в amoCRM
                                </h1>

                            <h2 className="dist-hero-title">
                                Длинные названия полей без обрезки и наложений
                            </h2>

                            <p className="dist-hero-sub">
                                Виджет автоматически переносит длинные названия полей в
                                карточках amoCRM, убирает многоточия и делает текст полностью
                                читаемым. Больше никаких наложений строк и “обрубленных”
                                заголовков в важных пользовательских полях.
                            </p>

                            <div className="dist-cta">
                                <a
                                    className="dist-btn-primary"
                                    href="https://www.amocrm.ru/oauth/?state=state&mode=popup&client_id=d56233ed-70ac-4f3c-bc18-ddd2ebe3ae6c"
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
                        subtitle="После установки виджета в карточках сделок, контактов и компаний длинные названия полей перестают обрезаться многоточием. Текст аккуратно переносится на новые строки, высота строки подстраивается автоматически, а интерфейс остаётся аккуратным и читаемым."
                        // videoUrl="/widgets/TransferFields/transfer-fields.gif"
                    />
                </>
            )}

            <SettingsCard
                id="instruction"
                title="Как начать пользоваться за 1 минуту"
                subtitle="Следуйте простым шагам, чтобы включить автоматический перенос длинных названий полей в amoCRM:"
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
