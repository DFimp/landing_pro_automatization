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

const widget = WIDGETS_DATA["setting-feed"];

export default function FeedFilter({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Фильтр ленты событий в сделке amoCRM
              </WidgetHeroBadge>
            }
            title="Смотрите только нужные события, без шума и прокрутки"
            description="Переключайтесь между задачами, примечаниями, письмами, звонками и чатами одним кликом. Виджет скрывает лишнее, прячет пустые даты и автоматически применяет фильтр при догрузке ленты."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <FeaturesCard
            title="Что умеет виджет"
            subtitle="Функции, которые ускоряют работу в каждой сделке"
            items={FEATURES}
          />

          <ProblemsCard
            title="Когда фильтр особенно полезен"
            subtitle="Типовые ситуации, где экономится больше всего времени"
            items={PROBLEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Как начать пользоваться за 3 минуты"
          subtitle="Следуйте простым шагам, и фильтр появится в карточке сделки:"
          steps={STEPS}
          showVideo={false}
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
