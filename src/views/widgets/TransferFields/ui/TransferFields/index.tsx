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

const widget = WIDGETS_DATA["transfer-fields"];

export default function TransferFields({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Перенос длинных названий полей в amoCRM
              </WidgetHeroBadge>
            }
            title="Длинные названия полей без обрезки и наложений"
            description="Виджет автоматически переносит длинные названия полей в карточках amoCRM, убирает многоточия и делает текст полностью читаемым. Больше никаких наложений строк и обрезанных заголовков в важных пользовательских полях."
            installHref={getWidgetInstallUrl(widget.clientId!)}
          />

          <PreviewCard
            title="Как это работает?"
            subtitle="После установки виджета в карточках сделок, контактов и компаний длинные названия полей перестают обрезаться многоточием. Текст аккуратно переносится на новые строки, высота строки подстраивается автоматически, а интерфейс остается аккуратным и читаемым."
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Как начать пользоваться за 1 минуту"
          subtitle="Следуйте простым шагам, чтобы включить автоматический перенос длинных названий полей в amoCRM:"
          steps={STEPS}
          showVideo
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
