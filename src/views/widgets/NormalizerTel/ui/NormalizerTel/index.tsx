import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, FEATURES } from "./constants";
import { WidgetHeroActions, WidgetHeroSection, WidgetPageTemplate } from "@/features/widget-page";

const widget = WIDGETS_DATA["normalizer-tel"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export default function NormalizerTel({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={(
        <>
          <WidgetHeroSection>
            <h1
              className="at-pill at-bleed-left inline-flex items-center gap-2 px-[18px] py-[10px] text-[14px] leading-none bg-[#2847ff] text-[#dfe7ff] rounded-full max-[480px]:box-border max-[480px]:justify-center max-[480px]:px-4 max-[480px]:py-[12px] max-[480px]:text-[12px]"
              style={{
                marginLeft: "calc(50% - 50vw)",
                paddingLeft: "calc(49.5vw - 50% + 16px)",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              Нормализация телефонов в amoCRM
            </h1>

            <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
              Приводите номера к единому формату без ручной рутины
            </h2>

            <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
              <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Виджет автоматически нормализует номера телефонов в карточках amoCRM по вашим
                  правилам: проверяет условия, применяет действия и сохраняет единый формат
                  по всей базе. Вы убираете ошибки ввода, дубли и хаос в телефонии без сложной
                  доработки CRM.
                </p>
                <WidgetHeroActions
                  installHref={installHref}
                  widgetId={widget.clientId}
                />
              </div>
            </div>
          </WidgetHeroSection>



          <CaseCard
            title="Как работает NormalizerTel на практике"
            subtitle="Шаблон по умолчанию применяется при сохранении карточки, а массовая обработка выравнивает старую базу."
            items={CASE_ITEMS}
          />
        </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Создайте правила нормализации и запустите обработку базы за несколько шагов:"
          steps={STEPS}
          showVideo={false}
        />
      )}
      postInstruction={(
        <>
          <FeaturesCard
            title="Возможности NormalizerTel"
            subtitle="Набор инструментов для чистой телефонии в контактах, сделках и компаниях."
            items={FEATURES}
          />

          <section
            className="bg-white"
            style={{ paddingTop: 24, paddingBottom: 72 }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
        </>
      )}
      consult={false}
    />
  );
}

