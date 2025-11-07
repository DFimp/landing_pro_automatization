import "./style.css";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import Tariffs from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/Tariffs";

export function AccompanimentTariffsSection() {
  return (
    <div id="tariffs-area" className="mt-20 flex flex-col gap-20 z-1">
      <TitleArrow text="Тарифы" variant="secondary" />
      <Tariffs />
    </div>
  );
}
