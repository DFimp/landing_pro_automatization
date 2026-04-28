import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import ConsultCard from "@/sections/landing/consultCard/ConsultCard";
import CaseCard from "@/sections/landing/caseCard/CaseCard";
import ProblemsCard from "@/sections/landing/problemsCard/ProblemsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS, CASE_ITEMS, PROBLEMS, FEATURES } from "./constants";
import {
  WidgetHeroBadge,
  WidgetHeroContent,
  WidgetPageTemplate,
  type WidgetPageProps,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["delete-tasks-ban"];

export default function DeleteTasksBan({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>{widget.seoTitle}</WidgetHeroBadge>
            }
            title="Перестаньте терять задачи и историю работы с клиентами"
            description="Виджет блокирует удаление и изменение задач для выбранных менеджеров, с гибкими исключениями по типам задач. Сохраните честную аналитику и полную историю коммуникаций в amoCRM."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <ProblemsCard
            title="Проблемы с удалением задач в amoCRM"
            subtitle="Когда задачи можно удалить, вы теряете контроль над процессом"
            items={PROBLEMS}
          />

          <CaseCard
            title="Как виджет решает эти проблемы"
            subtitle="Жесткий контроль задач без потери гибкости для руководителей"
            items={CASE_ITEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Пошаговая настройка виджета"
          subtitle="Следуйте простым шагам, чтобы настроить запрет удаления задач:"
          steps={STEPS}
          showVideo
        />
      }
      postInstruction={
        <>
          <FeaturesCard
            title="Возможности виджета"
            subtitle="Инструменты для защиты задач и прозрачной аналитики"
            items={FEATURES}
          />

          <section className="bg-white" style={{ paddingTop: 24, paddingBottom: 72 }}>
            <div className="mx-auto w-full max-w-[1200px] px-4">
              <ConsultCard />
            </div>
          </section>
        </>
      }
      consult={false}
    />
  );
}
