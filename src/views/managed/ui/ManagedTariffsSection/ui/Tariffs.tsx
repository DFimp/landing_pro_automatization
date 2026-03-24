import { tariffs } from "@/views/managed/ui/ManagedTariffsSection/ui/lib";
import { Tariff } from "@/views/managed/ui/ManagedTariffsSection/ui/models";
import TariffsClient from "./TariffsClient.client";

export default function Tariffs() {
  return <TariffsClient tariffs={tariffs as Tariff[]} />;
}
