import { tariffs } from "@/widgets/managed/ManagedTariffsSection/ui/lib";
import { Tariff } from "@/widgets/managed/ManagedTariffsSection/ui/models";
import TariffsClient from "./TariffsClient.client";

export default function Tariffs() {
  return <TariffsClient tariffs={tariffs as Tariff[]} />;
}
