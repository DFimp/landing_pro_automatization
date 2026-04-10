import { WidgetsBonusesSection } from "../WidgetsBonusesSection/WidgetsBonusesSection";
import { WidgetsSupportSection } from "../WidgetsSupportSection/WidgetsSupportSection";
import { WidgetsSpecialOfferSection } from "../WidgetsSpecialOfferSection/WidgetsSpecialOfferSection";
import { WidgetsWidgetsSection } from "@/views/WidgetsPage/ui/WidgetsSection/WidgetsSection";
import { ProductSchemaTag } from "@/shared/lib/seo";

export default LicensePageContent;

function LicensePageContent() {
  return (
    <>
      <ProductSchemaTag
        data={{
          name: "Лицензия amoCRM",
          description:
            "Покупка и продление лицензий amoCRM. Официальный партнер. Помощь в выборе тарифа. Скидки для клиентов.",
          brand: { name: "amoCRM" },
          offers: {
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <main>
        <WidgetsBonusesSection />
        <WidgetsWidgetsSection />
        <WidgetsSupportSection />
        <WidgetsSpecialOfferSection />
      </main>
    </>
  );
}
