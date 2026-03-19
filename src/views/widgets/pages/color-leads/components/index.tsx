import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { FEATURES, PROBLEMS, STEPS } from "./constants";
import {
  WidgetConsultSection,
  WidgetHeroBadge,
  WidgetHeroContent,
  WidgetPageTemplate,
  type WidgetPageProps,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["color-leads"];

export default function ColorDeals({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      mainClassName="bg-transparent overflow-x-hidden"
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Окраска сделок для amoCRM
              </WidgetHeroBadge>
            }
            title="Автоматически выделяйте сделки цветом по правилам"
            description="Настройте условия: бюджет, этап, теги, пользовательские поля и другие признаки, и подсветите сделки в воронке и в списке. Команда быстрее видит приоритеты и меньше пропускает важное."
            sectionClassName="pt-[72px] pb-[70px] text-white rounded-b-[28px] bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(108,0,255,0.25),transparent_60%),radial-gradient(1000px_500px_at_100%_20%,rgba(0,102,255,0.25),transparent_60%),linear-gradient(180deg,#0f1427_0%,#151b33_60%,#0f1427_100%)] max-[768px]:pt-[56px] max-[768px]:pb-[96px] max-[480px]:pt-[28px] max-[480px]:pb-[36px] max-[480px]:rounded-b-[24px]"
            actionsClassName="my-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0"
            installHref={widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined}
            installButtonClassName="inline-flex items-center justify-center h-11 px-8 bg-[#386bff] text-white rounded-full font-bold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-200 hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)] max-[480px]:w-full max-[480px]:text-[15px]"
          />

          <FeaturesCard
            title="Что дает окраска сделок?"
            subtitle="Сильный визуальный сигнал для команды продаж"
            items={FEATURES}
          />

          <ProblemsCard
            title="Когда виджет особенно полезен?"
            subtitle="Типовые ситуации, где окраска экономит время и деньги"
            items={PROBLEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Как настроить виджет за 3 минуты"
          subtitle="Следуйте простым шагам для быстрой настройки:"
          steps={STEPS}
          showVideo
        />
      }
      postInstruction={
        <WidgetConsultSection
          surfaceClassName={false}
          className="mt-[30px] mx-[30px] mb-[80px]"
          containerClassName="mx-auto w-full max-w-[1200px]"
          style={undefined}
        />
      }
      consult={false}
    />
  );
}
