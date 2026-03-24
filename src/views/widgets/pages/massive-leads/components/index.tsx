import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, FEATURES } from "./constants";
import {
  WidgetConsultSection,
  WidgetHeroBadge,
  WidgetHeroContent,
  WidgetPageTemplate,
  type WidgetPageProps,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["massive-leads"];

export default function MassiveLeads({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Массовое создание сделок в amoCRM
              </WidgetHeroBadge>
            }
            title="Создавайте сотни сделок за секунды!"
            description="Автоматизируйте создание сделок для всех ваших контактов одним нажатием. Забудьте о рутинной работе, виджет сделает все за вас быстро и без ошибок."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <FeaturesCard
            title="Почему наш виджет незаменим?"
            subtitle="Мощные функции для максимальной эффективности продаж"
            items={FEATURES}
          />

          <ProblemsCard
            title="Когда виджет особенно полезен?"
            subtitle="Реальные сценарии использования в бизнесе"
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
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
