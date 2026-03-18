import { permanentRedirect } from "next/navigation";

export default function LegacyAccompanimentPage() {
  permanentRedirect("/managed");
}

