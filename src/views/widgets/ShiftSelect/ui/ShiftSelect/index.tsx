import SettingsCard from "@/sections/landing/settingsCard/SettingsCard";
import PreviewCard from "@/sections/landing/previewCard/PreviewCard";
import { WIDGETS_DATA, getWidgetInstallUrl } from "@/shared/constants/widgets";
import { STEPS } from "./constants";
import {
  WidgetConsultSection,
  WidgetHeroBadge,
  WidgetHeroContent,
  WidgetPageTemplate,
  type WidgetPageProps,
} from "@/features/widget-page";

const widget = WIDGETS_DATA["shift-select"];

export default function ShiftSelect({ searchParams }: WidgetPageProps) {
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
            title="Выделяйте десятки сделок и контактов за пару секунд"
            description="Виджет добавляет удобное выделение чекбоксов по Shift и протягиванием мышью в списках amoCRM. Ускорьте массовое изменение ответственных, статусов и запуск автоматизаций."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <PreviewCard
            title="Как это работает?"
            subtitle="После установки виджета в списках amoCRM вы сможете выделять сущности с зажатым Shift при наведении на чекбоксы, а также протягивать мышью с зажатой левой кнопкой и моментально выбирать целые диапазоны."
            videoUrl="/widgets/ShiftSelect/shift-select.gif"
            disableAmbientEffects
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Как начать пользоваться за 1 минуту"
          subtitle="Следуйте простым шагам, чтобы включить групповой выбор чекбоксов в amoCRM:"
          steps={STEPS}
          showVideo
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
