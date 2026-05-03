import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import FeaturesCard from "@/sections/landing/featuresCard/FeaturesCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { FEATURES, STEPS } from "./constants";
import {
  WidgetConsultSection,
  WidgetHeroBadge,
  WidgetHeroContent,
  WidgetPageTemplate,
  type WidgetPageProps,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["color-fields"];
const installHref = widget.clientId
  ? getWidgetInstallUrl(widget.clientId)
  : undefined;

export default function ColorFields({ searchParams }: WidgetPageProps) {
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
            title="Выделяйте ключевые поля и значения в карточке сделки цветом"
            description="Виджет помогает команде быстрее считывать важные данные в карточке сделки. Для каждой воронки можно собрать свой список полей, отдельно настроить цвет названия и значения, а для списков и числовых полей задать собственные сценарии подсветки."
            installHref={installHref}
          />

          <FeaturesCard
            title="Что дает виджет команде"
            subtitle="Меньше поиска глазами по карточке, меньше пропущенных деталей и быстрее работа в сделках"
            items={FEATURES}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Как настроить подсветку по воронкам"
          subtitle="Подключите виджет, выберите нужные воронки и задайте цветовые акценты для полей прямо в настройках:"
          steps={STEPS}
          showVideo={false}
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
