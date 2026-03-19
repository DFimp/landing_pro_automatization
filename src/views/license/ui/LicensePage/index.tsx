import {
  WidgetsBonusesSection,
  WidgetsWidgetsSection,
  WidgetsSupportSection,
  WidgetsSpecialOfferSection,
} from "@/views/license/components";
import { ProductSchemaTag } from "@/shared/lib/seo";

export default LicensePageContent;

function LicensePageContent() {
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
      <main className="overflow-x-hidden">
        <WidgetsBonusesSection />
        <WidgetsWidgetsSection />
        <WidgetsSupportSection />
        <WidgetsSpecialOfferSection />
      </main>
    </>
  );
}
