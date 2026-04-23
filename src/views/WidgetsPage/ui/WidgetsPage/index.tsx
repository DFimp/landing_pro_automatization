import { WidgetsList } from "@/views/WidgetsPage/ui/WidgetsSection/ui/WidgetsList";
import { WIDGETS_LIST } from "@/shared/constants";

const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

type TariffResponse = {
  price_rub: number;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

async function loadPriceLabelsByKey(): Promise<Record<string, string>> {
  if (!API_URL) {
    return {};
  }

  const labels = await Promise.all(
    WIDGETS_LIST.map(async (widget) => {
      if (!widget.clientId) {
        return null;
      }

      try {
        const response = await fetch(
          `${API_URL}/subscribe/web/tariffs?widget_id=${encodeURIComponent(widget.clientId)}`,
          {
            method: "GET",
            headers: { Accept: "application/json" },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          return null;
        }

        const tariffs = (await response.json()) as TariffResponse[];

        if (!Array.isArray(tariffs) || tariffs.length === 0) {
          return [widget.key, "Бесплатно"] as const;
        }

        const minPrice = Math.min(
          ...tariffs
            .map((tariff) => tariff.price_rub)
            .filter((price): price is number => typeof price === "number")
        );

        if (!Number.isFinite(minPrice)) {
          return null;
        }

        return [widget.key, `от ${formatPrice(minPrice)} ₽`] as const;
      } catch {
        return null;
      }
    })
  );

  const map: Record<string, string> = {};
  for (const entry of labels) {
    if (!entry) {
      continue;
    }

    map[entry[0]] = entry[1];
  }

  return map;
}

export default WidgetsPageContent;

async function WidgetsPageContent() {
  const priceLabelsByKey = await loadPriceLabelsByKey();

  return (
    <main id="Widgets" className="mx-auto w-full max-w-[1200px] px-4">
      <div className="my-10 sm:my-20">
        <WidgetsList priceLabelsByKey={priceLabelsByKey} />
      </div>
    </main>
  );
}
