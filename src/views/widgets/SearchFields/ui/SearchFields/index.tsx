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

const widget = WIDGETS_DATA["search-fields"];
const installHref = widget.clientId
  ? getWidgetInstallUrl(widget.clientId)
  : undefined;

export default function SearchFields({ searchParams }: WidgetPageProps) {
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
            title="Находите нужные поля и значения в карточке за секунды"
            description="Виджет добавляет поиск по полям, выпадающим спискам и multisuggest прямо в карточках сделок, контактов и компаний. Команда быстрее заполняет данные, тратит меньше времени на прокрутку и реже ошибается при выборе значений."
            installHref={installHref}
          />

          <FeaturesCard
            title="Что дает виджет команде"
            subtitle="Функции, которые ускоряют работу в длинных карточках и сложных формах"
            items={FEATURES}
          />

          <ProblemsCard
            title="Какие задачи он решает"
            subtitle="Типовые ситуации, где менеджеры теряют время без быстрого поиска"
            items={PROBLEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Как начать пользоваться"
          subtitle="Подключите виджет и используйте поиск по полям и значениям прямо в интерфейсе amoCRM:"
          steps={STEPS}
          showVideo={false}
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
