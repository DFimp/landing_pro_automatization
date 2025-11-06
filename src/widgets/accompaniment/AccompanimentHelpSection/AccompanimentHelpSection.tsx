import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import HelpServices from "@/widgets/accompaniment/AccompanimentHelpSection/ui/HelpServices";

export function AccompanimentHelpSection() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <TitleArrow text="Как мы можем помочь?" variant="secondary" />
      <HelpServices />
    </div>
  );
}
