import { WidgetsList } from "@/views/WidgetsPage/ui/WidgetsSection/ui/WidgetsList";

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
