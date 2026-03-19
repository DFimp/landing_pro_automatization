import { tariffs } from "@/views/managed/components/ManagedTariffsSection/ui/lib";
import { Tariff } from "@/views/managed/components/ManagedTariffsSection/ui/models";
import TariffsClient from "./TariffsClient.client";

export default function Tariffs() {
  return <TariffsClient tariffs={tariffs as Tariff[]} />;
}
