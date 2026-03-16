import type { Metadata } from "next";
import { LICENSE_PAGE_METADATA } from "@/shared/constants/metadata";
import {
  WidgetsBonusesSection,
  WidgetsWidgetsSection,
  WidgetsSupportSection,
  WidgetsSpecialOfferSection,
} from "@/widgets/widgets";
import { ProductSchemaTag } from "@/shared/lib/seo";

export const metadata: Metadata = LICENSE_PAGE_METADATA;

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
