import React from "react";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import PreviewCard from "@/sections/landing/previewCard/PreviewCard";
import ScrollToInstructionLink from "@/sections/landing/scrollToInstructionLink/ScrollToInstructionLink";import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton, WidgetPageTemplate } from "@/features/widget-page";

const widget = WIDGETS_DATA["time-zone"];

export default function TimeZone({
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
                  Регион по телефону для amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">Звоните в правильное время!</h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Автоматически определяйте регион и текущее время клиента по
                  номеру телефона. Никогда больше не разбудите клиента в 6 утра
                  или не позвоните в полночь!
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
              subtitle="Виджет автоматически отображается прямо в карточке контакта"
              videoUrl="/widgets/TimeZone/time-zone-demo.gif"
              imageUrl=""
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
          videoId="d7b3dd2910f7129214500d477d347a93"
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
