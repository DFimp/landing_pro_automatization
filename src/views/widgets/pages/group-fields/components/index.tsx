import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, PROBLEMS, CASE_ITEMS } from "./constants";
import {
  WidgetConsultSection,
  WidgetHeroBadge,
  WidgetHeroContent,
  WidgetPageTemplate,
  type WidgetPageProps,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["group-fields"];

export default function GroupFields({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Группировка полей в карточке сделки в amoCRM
              </WidgetHeroBadge>
            }
            title="Наведите порядок в полях и ускорьте работу менеджеров"
            description="Автоматически группируйте поля в карточке сделки по логическим блокам. Удобная навигация, меньше прокрутки, быстрый доступ к нужной информации даже при большом количестве полей."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <ProblemsCard
            title="Проблемы с большим количеством полей"
            subtitle="Нагруженные карточки сделок мешают эффективной работе менеджеров"
            items={PROBLEMS}
          />

          <CaseCard
            title="Как помогает группировка полей"
            subtitle="Структурированная карточка сделки, быстрее, понятнее, удобнее"
            items={CASE_ITEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам, чтобы навести порядок в карточке сделки:"
          steps={STEPS}
          showVideo={false}
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
