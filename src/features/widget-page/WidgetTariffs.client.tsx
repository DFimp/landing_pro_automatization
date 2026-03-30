"use client";

import { useEffect, useMemo, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
  return `${new Intl.NumberFormat("ru-RU").format(price)} \u20bd`;
}

function formatDuration(months: number) {
  const mod10 = months % 10;
  const mod100 = months % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${months} \u043c\u0435\u0441\u044f\u0446`;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${months} \u043c\u0435\u0441\u044f\u0446\u0430`;
  }

  return `${months} \u043c\u0435\u0441\u044f\u0446\u0435\u0432`;
}

export default function WidgetTariffs({
  widgetId,
  className,
}: WidgetTariffsProps) {
  const [tariffs, setTariffs] = useState<TariffResponse[] | null>(null);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => {
    if (!API_URL) {
      setTariffs([]);
      setStatus("loaded");
      return;
    }

    const abortController = new AbortController();

    const loadTariffs = async () => {
      try {
        const response = await fetch(
          `${API_URL}/subscribe/web/tariffs?widget_id=${encodeURIComponent(widgetId)}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            cache: "no-store",
            signal: abortController.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to load tariffs for ${widgetId}: ${response.status}`);
        }

        const payload = (await response.json()) as TariffResponse[];
        setTariffs(Array.isArray(payload) ? payload : []);
        setStatus("loaded");
      } catch (error) {
        if (abortController.signal.aborted) {
          return;
        }

        console.warn("Failed to load widget tariffs", widgetId, error);
        setStatus("error");
      }
    };

    void loadTariffs();

    return () => {
      abortController.abort();
    };
  }, [widgetId]);

  const sortedTariffs = useMemo(
    () =>
      [...(tariffs ?? [])].sort(
        (left, right) => left.duration_months - right.duration_months
      ),
    [tariffs]
  );

  if (status === "error") {
    return null;
  }

  return (
    <div
      className={cn(
        "relative w-[min(100%,272px)] rounded-[18px] border border-white/10 bg-white/[0.04] px-4 pb-3.5 pt-[18px] backdrop-blur-[12px] max-[900px]:w-full max-[480px]:rounded-[16px] max-[480px]:px-3.5 max-[480px]:pb-3 max-[480px]:pt-4",
        className
      )}
    >
      <p className="mt-0.5 text-[14px] font-medium text-white/62">
        {"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}
      </p>

      {status === "loading" ? (
        <div className="mt-3 space-y-2">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="animate-pulse border-t border-white/[0.08] pt-2 first:border-t-0 first:pt-0"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="h-4 w-20 rounded-full bg-white/10" />
                <div className="h-4 w-24 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      ) : sortedTariffs.length === 0 ? (
        <p className="mt-3 text-[15px] font-medium text-white">
          {"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0432\u0438\u0434\u0436\u0435\u0442"}
        </p>
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
              <span className="text-[15px] text-white/72">
                {formatDuration(tariff.duration_months)}
              </span>

              <span className="shrink-0 text-[18px] font-semibold text-white">
                {formatPrice(tariff.price_rub)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
