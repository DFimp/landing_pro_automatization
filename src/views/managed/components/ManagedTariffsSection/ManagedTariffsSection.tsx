import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import Tariffs from "@/views/managed/components/ManagedTariffsSection/ui/Tariffs";

export function ManagedTariffsSection() {
  return (
    <div
      id="tariffs-area"
      className="relative mt-20 flex flex-col gap-20 z-1"
    >
      <TitleArrow text="Тарифы" variant="secondary" />
      <Tariffs />
    </div>
  );
}
