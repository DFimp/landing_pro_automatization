import React from "react";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import HowItWorksScroll from "./ui/HowItWorksScroll";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, FEATURES } from "./constants";
import { WidgetHeroActions, WidgetHeroSection, WidgetPageTemplate, WidgetTariffs } from "@/features/widget-page";

const widget = WIDGETS_DATA["auto-tasks"];

export default function AutoTask({
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
            <WidgetHeroSection className="relative z-0 pt-[70px] pb-[70px] text-white rounded-b-[28px] bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(108,0,255,0.25),transparent_60%),radial-gradient(1000px_500px_at_100%_20%,rgba(0,102,255,0.25),transparent_60%),linear-gradient(180deg,#0f1427_0%,#151b33_60%,#0f1427_100%)] max-[768px]:pt-[56px] max-[768px]:pb-[96px] max-[480px]:pt-[28px] max-[480px]:pb-[36px] max-[480px]:rounded-b-[24px]">
                <h1 className="inline-flex items-center gap-2 bg-[#2847ff] text-[#dfe7ff] rounded-full px-[18px] py-[10px] text-[14px] leading-none rounded-l-none ml-[calc(50%-50vw)] pl-[calc(49.5vw-50%+16px)] max-[480px]:px-[16px] max-[480px]:py-[12px] max-[480px]:text-[12px] max-[480px]:justify-center max-[480px]:box-border">
                  Автозадачи в сделках для amoCRM
                </h1>

                <h2 className="mt-10 text-white font-semibold text-[clamp(36px,6vw,64px)] leading-[1.05] tracking-[0.2px] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]">
                  Никогда не забывайте о сделках!
                </h2>

                <div className="mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]">
                <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
                <p className="max-w-[920px] min-[901px]:max-w-none text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]">
                  Автоматически создавайте задачи для сделок без активности.
                  <br />
                  Настраиваемые статусы, типы задач и ответственные.
                  <br />
                  Увеличьте конверсию на <span className="inline-block px-[5px] py-[3px] rounded-[5px] bg-[#4A6DFF] text-white leading-[1.1] tracking-[0.2px] align-baseline">
                    35%
                  </span>{" "}
                  благодаря своевременному контакту
                  <br />с клиентами.
                </p>
                                <WidgetHeroActions
                  className="my-10 max-[640px]:mb-[10px]"
                  installHref={getWidgetInstallUrl(widget.clientId!)}
                  installButtonClassName="inline-flex items-center justify-center h-11 px-8 bg-[#386bff] text-white rounded-full font-bold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-150 hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)] max-[480px]:w-full max-[480px]:text-[15px]"
                  widgetId={widget.clientId}
                />
                </div>
                <WidgetTariffs widgetId={widget.clientId!} />
                </div>
                <div className="mt-7 grid grid-cols-1 gap-0 bg-white text-[#0f172a] rounded-[22px] px-6 py-[22px] w-max shadow-[0_18px_36px_-14px_rgba(0,0,0,0.3),0_8px_18px_-12px_rgba(0,0,0,0.18)] min-[640px]:grid-cols-3 min-[640px]:px-7 min-[640px]:py-6 min-[640px]:[&>div+div]:border-l min-[640px]:[&>div+div]:border-[rgba(15,23,42,0.08)] max-[640px]:w-full max-[640px]:max-w-full max-[640px]:mt-[14px] max-[640px]:px-2 max-[640px]:py-[10px] max-[640px]:rounded-[16px] max-[640px]:shadow-[0_10px_20px_rgba(0,0,0,0.12)] max-[640px]:grid-cols-3 max-[640px]:overflow-hidden max-[640px]:[&>div+div]:border-l max-[640px]:[&>div+div]:border-[rgba(15,23,42,0.08)] max-[640px]:[&>div+div]:pl-2 max-[360px]:px-[6px] max-[360px]:py-2 max-[360px]:rounded-[14px]">
                  <div className="py-2 px-[18px] text-center max-[640px]:px-[6px] max-[640px]:py-2 max-[640px]:min-w-0">
                    <div className="font-semibold text-[64px] leading-none tracking-[0.2px] text-[#3b67ff] max-[640px]:font-bold max-[640px]:leading-[1.05] max-[640px]:whitespace-nowrap max-[640px]:text-[clamp(20px,6.2vw,26px)] max-[360px]:text-[clamp(18px,6vw,22px)]">+35%</div>
                    <div className="mt-2 text-[#5b6475] text-[20px] max-[640px]:mt-1 max-[640px]:text-[#6b7280] max-[640px]:leading-[1.25] max-[640px]:text-[clamp(10px,3.2vw,12px)] max-[640px]:break-words max-[360px]:text-[clamp(9.5px,3vw,11px)]">Рост конверсии</div>
                  </div>
                  <div className="py-2 px-[18px] text-center max-[640px]:px-[6px] max-[640px]:py-2 max-[640px]:min-w-0">
                    <div className="font-semibold text-[64px] leading-none tracking-[0.2px] text-[#3b67ff] max-[640px]:font-bold max-[640px]:leading-[1.05] max-[640px]:whitespace-nowrap max-[640px]:text-[clamp(20px,6.2vw,26px)] max-[360px]:text-[clamp(18px,6vw,22px)]">0</div>
                    <div className="mt-2 text-[#5b6475] text-[20px] max-[640px]:mt-1 max-[640px]:text-[#6b7280] max-[640px]:leading-[1.25] max-[640px]:text-[clamp(10px,3.2vw,12px)] max-[640px]:break-words max-[360px]:text-[clamp(9.5px,3vw,11px)]">Забытых сделок</div>
                  </div>
                  <div className="py-2 px-[18px] text-center max-[640px]:px-[6px] max-[640px]:py-2 max-[640px]:min-w-0">
                    <div className="font-semibold text-[64px] leading-none tracking-[0.2px] text-[#3b67ff] max-[640px]:font-bold max-[640px]:leading-[1.05] max-[640px]:whitespace-nowrap max-[640px]:text-[clamp(20px,6.2vw,26px)] max-[360px]:text-[clamp(18px,6vw,22px)]">5 мин</div>
                    <div className="mt-2 text-[#5b6475] text-[20px] max-[640px]:mt-1 max-[640px]:text-[#6b7280] max-[640px]:leading-[1.25] max-[640px]:text-[clamp(10px,3.2vw,12px)] max-[640px]:break-words max-[360px]:text-[clamp(9.5px,3vw,11px)]">На настройку</div>
                  </div>
                </div>
              </WidgetHeroSection>
            <ProblemsCard
              title="Проблемы традиционного способа"
              subtitle="Почему менеджеры теряют время и клиентов при работе с WhatsApp"
              items={PROBLEMS}
            />

            <section className="[&_h2.at-section-title]:text-[clamp(26px,4vw,64px)] [&_h2.at-section-title]:font-semibold [&_h2.at-section-title]:text-[#3667ff] [&_h2.at-section-title]:mb-2 [&_p.at-subtitle]:text-[#3c4460] [&_p.at-subtitle]:leading-[1.6] [&_p.at-subtitle]:text-[20px]">
              <FeaturesCard
                title="Решение: Автозадачи в сделках"
                subtitle="Виджет автоматически следит за всеми сделками и создаёт задачи для «спящих» клиентов"
                items={FEATURES}
              />
            </section>

            <HowItWorksScroll />
          </>
      )}
      instruction={(
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
          videoId="68a9811758740029cb2c7a3e3d885869"
        />
      )}
      postInstruction={(
          <section className="py-[24px] pb-[72px] max-[768px]:py-[16px] max-[768px]:pb-[56px]">
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
      )}
      consult={false}
    />
  );
}
