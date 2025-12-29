import { tariffs } from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/lib";
import { Tariff } from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/models";
import TariffsClient from "./TariffsClient.client";

export default function Tariffs() {
  return <TariffsClient tariffs={tariffs as Tariff[]} />;
}
