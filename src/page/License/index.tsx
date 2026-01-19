import {
  WidgetsBonusesSection,
  WidgetsWidgetsSection,
  WidgetsSupportSection,
  WidgetsSpecialOfferSection,
} from "@/widgets/widgets";
import { ProductSchemaTag } from "@/shared/lib/seo";

export default function License() {
  return (
    <>
      <ProductSchemaTag
        data={{
          name: "Лицензия amoCRM",
          description: "Покупка и продление лицензий amoCRM. Официальный партнер. Помощь в выборе тарифа. Скидки для клиентов.",
          brand: { name: "amoCRM" },
          offers: {
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <main className="overflow-hidden">
        <WidgetsBonusesSection></WidgetsBonusesSection>
        <WidgetsWidgetsSection></WidgetsWidgetsSection>
        <WidgetsSupportSection></WidgetsSupportSection>
        <WidgetsSpecialOfferSection></WidgetsSpecialOfferSection>
      </main>
    </>
  );
}