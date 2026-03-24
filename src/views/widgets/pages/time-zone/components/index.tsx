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

const widget = WIDGETS_DATA["time-zone"];

export default function TimeZone({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Регион по телефону для amoCRM
              </WidgetHeroBadge>
            }
            title="Звоните в правильное время!"
            description="Автоматически определяйте регион и текущее время клиента по номеру телефона. Никогда больше не разбудите клиента в 6 утра и не позвоните в полночь."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <PreviewCard
            title="Как это выглядит?"
            subtitle="Виджет автоматически отображается прямо в карточке контакта"
            videoUrl="/widgets/TimeZone/time-zone-demo.gif"
            imageUrl=""
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
          videoId="d7b3dd2910f7129214500d477d347a93"
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
