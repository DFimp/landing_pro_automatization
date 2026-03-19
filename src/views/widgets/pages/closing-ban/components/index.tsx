import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import PreviewCard from "@/sections/landing/previewCard/PreviewCard";
import ScrollToInstructionLink from "@/sections/landing/scrollToInstructionLink/ScrollToInstructionLink";import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton, WidgetPageTemplate } from "@/features/widget-page";

const widget = WIDGETS_DATA["closing-ban"];

export default function СlosingBan({
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
                  Запрет закрытия задач без результата для amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">Нет задачам без результата!</h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Виджет не даст закрыть задачу без описания результата. Полная
                  прозрачность работы команды и контроль качества выполнения.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId!)}>
                    Установить виджет
                  </WidgetInstallButton>
                  <ScrollToInstructionLink />
                </div>
              </WidgetHeroSection>

            <PreviewCard
              title="Как это выглядит?"
              subtitle="После установки виджета при попытке закрыть задачу пустое поле с результатом подсвечивается красным, и кнопка закрытия не срабатывает. Можно задать минимальное количество символов для текста с результатом."
              videoUrl="/widgets/ClosingBan/closing-ban.gif"
            />
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
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
