import React from "react";
import SettingsCard from "@/widgets/landing/settingsCard/SettingsCard";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import PreviewCard from "@/widgets/landing/previewCard/PreviewCard";
import ScrollToInstructionLink from "@/widgets/landing/scrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton } from "@/widgets/widgetPages/shared";

const widget = WIDGETS_DATA["transfer-fields"];

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
          name: widget.seoTitle,
          description: widget.description,
        }}
      />
      <main className="bg-transparent">
        {!isIframe && (
          <>
            <WidgetHeroSection>
                <WidgetHeroBadge>
                  Перенос длинных названий полей в amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Длинные названия полей без обрезки и наложений
                </h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Виджет автоматически переносит длинные названия полей в
                  карточках amoCRM, убирает многоточия и делает текст полностью
                  читаемым. Больше никаких наложений строк и “обрубленных”
                  заголовков в важных пользовательских полях.
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
          <section
            className="bg-white"
            style={{ paddingTop: 24, paddingBottom: 72 }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
