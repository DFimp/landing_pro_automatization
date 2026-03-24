import React from "react";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import ScrollToInstructionLink from "@/sections/landing/scrollToInstructionLink/ScrollToInstructionLink";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { PROBLEMS, STEPS } from "./constants";
import { WidgetHeroSection, WidgetInstallButton, WidgetPageTemplate } from "@/features/widget-page";

const widget = WIDGETS_DATA["docs-flow"];

export default function DocsFlow({
  searchParams,
}: {
  searchParams: { embed?: string };
}) {
  const installUrl = widget.clientId ? getWidgetInstallUrl(widget.clientId) : null;

  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={(
        <>
          <WidgetHeroSection className="pt-[72px] pb-[48px] text-white rounded-b-[28px] bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(108,0,255,0.25),transparent_60%),radial-gradient(1000px_500px_at_100%_20%,rgba(0,102,255,0.25),transparent_60%),linear-gradient(180deg,#0f1427_0%,#151b33_60%,#0f1427_100%)] max-[480px]:pt-[28px] max-[480px]:pb-[36px] max-[480px]:rounded-b-[24px]">
              <h1
                className="inline-flex items-center gap-2 px-[18px] py-[10px] text-[14px] leading-none bg-[#2847ff] text-[#dfe7ff] rounded-full max-[480px]:box-border max-[480px]:justify-center max-[480px]:px-4 max-[480px]:py-[12px] max-[480px]:text-[12px]"
                style={{
                  marginLeft: "calc(50% - 50vw)",
                  paddingLeft: "calc(49.5vw - 50% + 16px)",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                Автоматическое формирование документов
              </h1>

              <h2 className="mt-10 font-bold text-white text-[clamp(34px,5.5vw,56px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                Договоры, счета и акты из карточки сделки — в Google Docs
              </h2>

              <p className="mt-[18px] max-w-[980px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                Виджет подставляет данные из amoCRM в шаблоны Google Docs: реквиситы
                клиента, суммы, товары и другие поля. Готовые документы можно
                скачать, отправить клиенту или выгрузить в СБС для согласования.
              </p>

              <div className="mt-[34px] flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3">
                {installUrl ? (
                  <WidgetInstallButton href={installUrl} className="inline-flex items-center justify-center h-11 px-8 bg-[#386bff] text-white rounded-full font-bold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-200 hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)] max-[480px]:w-full max-[480px]:text-[15px]">
                    Установить виджет
                  </WidgetInstallButton>
                ) : null}
                <ScrollToInstructionLink />
              </div>
            </WidgetHeroSection>
          <div className="mx-auto mt-6 max-w-[1200px]">
            <ProblemsCard
              title="Как это работает"
              subtitle="Шаблоны Google Docs + данные из amoCRM = готовые документы в пару кликов или по триггеру."
              items={PROBLEMS}
              className="rounded-[28px] overflow-hidden"
            />
          </div>
        </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="нструкция по настройке"
          subtitle="Следуйте шагам ниже — и вы сможете формировать документы вручную и автоматически."
          steps={STEPS}
          showVideo={false}
        />
      )}
      postInstruction={(
          <section className="mt-[30px] mb-[80px]">
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
      )}
      consult={false}
    />
  );
}
