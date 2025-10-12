import type { Metadata } from "next";
import { WidgetsBonusesSection, WidgetsWidgetsSection, WidgetsSupportSection, WidgetsSpecialOfferSection } from "@/widgets/widgets";

export const metadata: Metadata = {} //доделать слова


export default function Widgets() {
    return (
        <main id="Widgets" className="overflow-hidden">
            <WidgetsBonusesSection></WidgetsBonusesSection>
            <WidgetsWidgetsSection></WidgetsWidgetsSection>
            <WidgetsSupportSection></WidgetsSupportSection>
            <WidgetsSpecialOfferSection></WidgetsSpecialOfferSection>
        </main>
    );
}
