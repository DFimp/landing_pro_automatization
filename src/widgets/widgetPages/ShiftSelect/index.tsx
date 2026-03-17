import React from "react";
import SettingsCard from "@/widgets/landing/settingsCard/SettingsCard";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import PreviewCard from "@/widgets/landing/previewCard/PreviewCard";
import ScrollToInstructionLink from "@/widgets/landing/scrollToInstructionLink/ScrollToInstructionLink";import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton, WidgetPageTemplate } from "@/widgets/widgetPages/shared";

const widget = WIDGETS_DATA["shift-select"];

export default function ShiftSelect({
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
                <WidgetHeroBadge>
                  Групповое выделение (Shift-выбор) для amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Выделяйте десятки сделок и контактов за пару секунд
                </h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Виджет добавляет удобное выделение чекбоксов по Shift и
                  протягиванием мышью в списках amoCRM. Ускорьте массовое
                  изменение ответственных, статусов и запуск автоматизаций.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId!)}>
                    Установить виджет
                  </WidgetInstallButton>
                  <ScrollToInstructionLink />
                </div>
              </WidgetHeroSection>

            <PreviewCard
              title="Как это работает?"
              subtitle="После установки виджета в списках amoCRM вы сможете выделять сущности с зажатым Shift при наведении на чекбоксы, а также протягивать мышью с зажатой левой кнопкой и моментально выбирать целые диапазоны."
              videoUrl="/widgets/ShiftSelect/shift-select.gif"
            />
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Как начать пользоваться за 1 минуту"
          subtitle="Следуйте простым шагам, чтобы включить групповой выбор чекбоксов в amoCRM:"
          steps={STEPS}
          showVideo
        />
      )}
      postInstruction={(
          <section
            className="bg-white"
            style={{ paddingTop: 24, paddingBottom: 72 }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
      )}
      consult={false}
    />
  );
}
