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

const widget = WIDGETS_DATA["other-deals"];
const installHref = widget.clientId ? getWidgetInstallUrl(widget.clientId) : undefined;

export default function OtherDeals({ searchParams }: WidgetPageProps) {
  return (
    <WidgetPageTemplate
      widget={widget}
      searchParams={searchParams}
      preInstruction={
        <>
          <WidgetHeroContent
            badge={
              <WidgetHeroBadge>
                Другие сделки клиента в amoCRM
              </WidgetHeroBadge>
            }
            title="Видьте все связанные сделки контакта и компании прямо в карточке"
            description="Виджет «Другие сделки» автоматически собирает историю клиента по контактам и компании в текущей сделке. Менеджер сразу видит все найденные сделки, их суммы, статусы, воронки, ответственных и выбранные поля без переходов по нескольким карточкам."
            installHref={installHref}
          />

          <FeaturesCard
            title="Почему этот виджет реально полезен"
            subtitle="Контекст по клиенту, который менеджер получает сразу в сделке"
            items={FEATURES}
          />

          <ProblemsCard
            title="Когда виджет особенно помогает"
            subtitle="Типовые сценарии, где история связанных сделок экономит время и снижает ошибки"
            items={PROBLEMS}
          />
        </>
      }
      instruction={
        <SettingsCard
          id="instruction"
          title="Как настроить виджет за несколько минут"
          subtitle="Подключите виджет, выберите источники поиска и проверьте результат на тестовой сделке:"
          steps={STEPS}
          showVideo={false}
        />
      }
      postInstruction={<WidgetConsultSection />}
      consult={false}
    />
  );
}
