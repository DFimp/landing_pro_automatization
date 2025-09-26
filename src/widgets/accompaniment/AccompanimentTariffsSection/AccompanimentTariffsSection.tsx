import "./style.css";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import Tariffs from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/Tariffs";

export function   AccompanimentTariffsSection() {
  return (
    <div id="tariffs-area" className="flex flex-col mt-20">
      <div className="flex flex-col gap-20 z-1">
        <TitleArrow text="Тарифы" link="/" variant="secondary" />
        <Tariffs />
      </div>

      <div id="first-circle"></div>
      <div id="second-circle"></div>
    </div>
  );
}
