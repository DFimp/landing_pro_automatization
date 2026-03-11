import { WidgetsList } from "@/widgets/widgets/WidgetsSection/ui/WidgetsList";

export default function WidgetsPage() {
    return (
        <main id="Widgets" className="overflow-x-hidden mx-auto w-full max-w-[1200px] px-4">
          <div className="my-10 sm:my-20">
            <WidgetsList />
          </div>
        </main>
    );
}
