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

const widget = WIDGETS_DATA["closing-ban"];

export default function ClosingBan({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Запрет закрытия задач без результата для amoCRM
              </WidgetHeroBadge>
            }
            title="Нет задачам без результата!"
            description="Виджет не даст закрыть задачу без описания результата. Полная прозрачность работы команды и контроль качества выполнения."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <PreviewCard
            title="Как это выглядит?"
            subtitle="После установки виджета при попытке закрыть задачу пустое поле с результатом подсвечивается красным, и кнопка закрытия не срабатывает. Можно задать минимальное количество символов для текста с результатом."
            videoUrl="/widgets/ClosingBan/closing-ban.gif"
            disableAmbientEffects
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
