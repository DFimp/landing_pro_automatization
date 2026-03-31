const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

type TariffResponse = {
  id: string;
  widget_id: string;
  widget_name: string;
  label: string;
  duration_months: number;
  price_rub: number;
};

type WidgetTariffsProps = {
  widgetId: string;
  className?: string;
};

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function formatPrice(price: number) {
  return `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;
}

function formatDuration(months: number) {
  const mod10 = months % 10;
  const mod100 = months % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${months} месяц`;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${months} месяца`;
  }

  return `${months} месяцев`;
}

async function loadTariffs(widgetId: string): Promise<TariffResponse[] | null> {
  if (!API_URL) {
    return [];
  }

  try {
    const response = await fetch(
      `${API_URL}/subscribe/web/tariffs?widget_id=${encodeURIComponent(widgetId)}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to load tariffs for ${widgetId}: ${response.status}`);
    }

    const payload = (await response.json()) as TariffResponse[];
    return Array.isArray(payload) ? payload : [];
  } catch (error) {
    console.warn("Failed to load widget tariffs", widgetId, error);
    return null;
  }
}

export default async function WidgetTariffs({
  widgetId,
  className,
}: WidgetTariffsProps) {
  const tariffs = await loadTariffs(widgetId);
  const sortedTariffs =
    tariffs === null
      ? null
      : [...tariffs].sort((left, right) => left.duration_months - right.duration_months);

  return (
    <div
      className={cn(
        "relative w-full rounded-[18px] border border-white/10 bg-white/[0.04] px-4 pb-3.5 pt-[18px] backdrop-blur-[12px] max-[480px]:rounded-[16px] max-[480px]:px-3.5 max-[480px]:pb-3 max-[480px]:pt-4",
        className
      )}
    >
      <p className="mt-0.5 text-[14px] font-medium text-white/62">Стоимость</p>

      {sortedTariffs === null ? (
        <p className="mt-3 text-[15px] font-medium text-white/85">
          Тарифы временно недоступны
        </p>
      ) : sortedTariffs.length === 0 ? (
        <p className="mt-3 text-[15px] font-medium text-white">Бесплатный виджет</p>
      ) : (
        <div className="mt-3">
          {sortedTariffs.map((tariff, index) => (
            <div
              key={tariff.id}
              className={cn(
                "flex items-center justify-between gap-4 py-2.5",
                index === 0 ? "pt-0" : "border-t border-white/[0.08]"
              )}
            >
              <span className="text-[17px] text-white/78 max-[480px]:text-[15px]">
                {formatDuration(tariff.duration_months)}
              </span>
              <span className="shrink-0 text-[34px] font-semibold leading-none tracking-[-0.02em] text-white max-[768px]:text-[28px] max-[480px]:text-[24px]">
                {formatPrice(tariff.price_rub)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
