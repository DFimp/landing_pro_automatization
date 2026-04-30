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
  WidgetTariffsSection,
  type WidgetPageProps,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["super-tasks"];
const installHref = widget.clientId
  ? getWidgetInstallUrl(widget.clientId)
  : "https://www.amocrm.ru/settings/widgets/";

export default function SuperTasks({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      tariffs={<WidgetTariffsSection widgetId={widget.clientId} />}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={<WidgetHeroBadge>{widget.seoTitle}</WidgetHeroBadge>}
            title="Автоматизируйте завершение задач через готовые результаты"
            description="SUPER задачи превращают закрытие задачи в управляемый сценарий: менеджер выбирает результат, а виджет запускает цепочку действий в сделке, контакте и компании. Меньше ручной рутины, меньше пропусков, больше контроля на каждом этапе воронки."
            installHref={installHref}
            widgetId={widget.clientId}
          />

          <ProblemsCard
            title="Проблемы при ручной обработке задач"
            subtitle="Без сценариев после результата задачи команда теряет скорость и предсказуемость"
            items={PROBLEMS}
          />

          <CaseCard
            title="Как SUPER задачи наводят порядок"
            subtitle="Единая логика выполнения задач и автоматические действия после выбранного результата"
            items={CASE_ITEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка SUPER задач"
          subtitle="Настройте связку «задача → результат → действия», чтобы убрать ручные операции:"
          steps={STEPS}
          showVideo={false}
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
