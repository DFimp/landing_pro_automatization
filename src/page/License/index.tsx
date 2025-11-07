import {
  WidgetsBonusesSection,
  WidgetsWidgetsSection,
  WidgetsSupportSection,
  WidgetsSpecialOfferSection,
} from "@/widgets/widgets";

export default function License() {
  return (
    <main className="overflow-hidden">
      <WidgetsBonusesSection></WidgetsBonusesSection>
      <WidgetsWidgetsSection></WidgetsWidgetsSection>
      <WidgetsSupportSection></WidgetsSupportSection>
      <WidgetsSpecialOfferSection></WidgetsSpecialOfferSection>
    </main>
  );
}