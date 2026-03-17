import type { Metadata } from "next";
import { WIDGETS_PAGE_METADATA } from "@/shared/constants/metadata";
import { WidgetsList } from "@/widgets/widgets/WidgetsSection/ui/WidgetsList";

export const metadata: Metadata = WIDGETS_PAGE_METADATA;

export default WidgetsPageContent;

function WidgetsPageContent() {
  return (
    <main id="Widgets" className="mx-auto w-full max-w-[1200px] px-4">
      <div className="my-10 sm:my-20">
        <WidgetsList />
      </div>
    </main>
  );
}
