import React from "react";
import SettingsCard from "@/widgets/landing/settingsCard/SettingsCard";
import ConsultCard from "@/widgets/landing/consultCard/ConsultCard";
import ProblemsCard from "@/widgets/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/widgets/landing/featuresCard/FeaturesCard";
import ScrollToInstructionLink from "@/widgets/landing/scrollToInstructionLink/ScrollToInstructionLink";
import { ServiceSchemaTag } from "@/shared/lib/seo";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { FEATURES, PROBLEMS, STEPS } from "./constants";
import { WidgetHeroBadge, WidgetHeroSection, WidgetInstallButton } from "@/widgets/widgetPages/shared";

const widget = WIDGETS_DATA["color-leads"];

export default function ColorDeals({
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

      <main className="bg-transparent overflow-x-hidden">
        {!isIframe && (
          <>
            <WidgetHeroSection className="pt-[72px] pb-[70px] text-white rounded-b-[28px] bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(108,0,255,0.25),transparent_60%),radial-gradient(1000px_500px_at_100%_20%,rgba(0,102,255,0.25),transparent_60%),linear-gradient(180deg,#0f1427_0%,#151b33_60%,#0f1427_100%)] max-[768px]:pt-[56px] max-[768px]:pb-[96px] max-[480px]:pt-[28px] max-[480px]:pb-[36px] max-[480px]:rounded-b-[24px]">
                <WidgetHeroBadge>
                  Окраска сделок для amoCRM
                </WidgetHeroBadge>

                <h2 className="mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Автоматически выделяйте сделки цветом по правилам
                </h2>

                <p className="mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Настройте условия (бюджет, этап, теги, пользовательские поля и
                  другие признаки) и подсветите сделки в воронке и в списке.
                  Команда быстрее видит приоритеты и меньше пропускает важное.
                </p>

                <div className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0">
                  {widget.clientId ? (
                    <WidgetInstallButton href={getWidgetInstallUrl(widget.clientId)} className="inline-flex items-center justify-center h-11 px-8 bg-[#386bff] text-white rounded-full font-bold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-200 hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)] max-[480px]:w-full max-[480px]:text-[15px]">
                      Установить виджет
                    </WidgetInstallButton>
                  ) : null}
                  <ScrollToInstructionLink />
                </div>
              </WidgetHeroSection>

            <FeaturesCard
              title="Что даёт окраска сделок?"
              subtitle="Сильный визуальный сигнал для команды продаж"
              items={FEATURES}
            />

            <ProblemsCard
              title="Когда виджет особенно полезен?"
              subtitle="Типовые ситуации, где окраска экономит время и деньги"
              items={PROBLEMS}
            />
          </>
        )}

        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
        />

        {!isIframe && (
          <section className="mt-[30px] mx-[30px] mb-[80px]">
            <div className="mx-auto w-full max-w-[1200px]">
              <ConsultCard />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
