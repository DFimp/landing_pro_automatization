"use client";

import { useEffect, useMemo, useState } from "react";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { SearchWithGroups, SearchableItem } from "@/shared/ui/SearchWithGroups/SearchWithGroups";
import { WIDGETS_LIST } from "@/shared/constants";
import { WidgetsListItem } from "./WidgetsListItem";

const VARIANT_PATTERN = [2, 1, 1, 3, 4, 1] as const;
const getVariant = (index: number) => VARIANT_PATTERN[index % VARIANT_PATTERN.length];
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_CURRENCY = "₽";

type Widget = {
  key: string;
  title: string;
  text: string;
  link: string;
  tags: string[];
  searchText: string;
};

type WidgetSearchItem = Widget & SearchableItem;

function normalize(s: string) {
  const value = (s ?? "").trim().toLowerCase();
  return value.replace(/[\u2010\u2011\u2012\u2013\u2014\u2212\uFE63\uFF0D]/g, "-");
}

function formatPrice(value: string | number, currency = DEFAULT_CURRENCY) {
  if (typeof value === "number") {
    return `${new Intl.NumberFormat("ru-RU").format(value)} ${currency}`.trim();
  }

  return value.trim();
}

function extractStringField(record: Record<string, unknown>, fields: readonly string[]) {
  for (const field of fields) {
    const value = record[field];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return null;
}

function extractPriceValue(record: Record<string, unknown>) {
  const currency =
    extractStringField(record, ["currency", "price_currency", "symbol"]) ?? DEFAULT_CURRENCY;

  for (const field of [
    "price",
    "monthly_price",
    "month_price",
    "amount",
    "value",
    "tariff_price",
    "min_price",
    "from_price",
  ] as const) {
    const value = record[field];

    if (typeof value === "number" && Number.isFinite(value)) {
      return formatPrice(value, currency);
    }

    if (typeof value === "string" && value.trim()) {
      return formatPrice(value, currency);
    }
  }

  return null;
}

function extractNumericPrice(payload: unknown): number | null {
  if (typeof payload === "number" && Number.isFinite(payload)) {
    return payload;
  }

  if (typeof payload === "string") {
    const normalized = payload.replace(/[^\d.,]/g, "").replace(",", ".");
    const parsed = Number(normalized);

    return Number.isFinite(parsed) ? parsed : null;
  }

  if (!payload || typeof payload !== "object") {
    return null;
  }

  const record = payload as Record<string, unknown>;

  for (const field of [
    "price",
    "monthly_price",
    "month_price",
    "amount",
    "value",
    "tariff_price",
    "min_price",
    "from_price",
  ] as const) {
    const price = extractNumericPrice(record[field]);

    if (price !== null) {
      return price;
    }
  }

  for (const field of ["data", "result"] as const) {
    const nestedPrice = extractNumericPrice(record[field]);

    if (nestedPrice !== null) {
      return nestedPrice;
    }
  }

  return null;
}

function extractTariffLabel(payload: unknown): string | null {
  if (typeof payload === "string" && payload.trim()) {
    return payload.trim();
  }

  if (typeof payload === "number" && Number.isFinite(payload)) {
    return formatPrice(payload);
  }

  if (!payload) {
    return null;
  }

  if (Array.isArray(payload)) {
    const prices = payload
      .map((item) => extractNumericPrice(item))
      .filter((price): price is number => price !== null);

    if (prices.length > 0) {
      const minPrice = Math.min(...prices);
      const prefix = prices.length > 1 ? "от " : "";

      return `${prefix}${formatPrice(minPrice)}`;
    }

    for (const item of payload) {
      const label = extractTariffLabel(item);

      if (label) {
        return label;
      }
    }

    return null;
  }

  if (typeof payload !== "object") {
    return null;
  }

  const record = payload as Record<string, unknown>;

  for (const field of ["data", "result", "tariffs", "items", "plans", "subscriptions"] as const) {
    const nested = extractTariffLabel(record[field]);

    if (nested) {
      return nested;
    }
  }

  const title = extractStringField(record, [
    "tariff",
    "title",
    "name",
    "label",
    "plan",
    "tariff_name",
  ]);
  const price = extractPriceValue(record);

  if (title && price) {
    return `${title} · ${price}`;
  }

  if (price) {
    return price;
  }

  return title;
}

export function WidgetsList() {
  const widgets = useMemo<Widget[]>(
    () =>
      WIDGETS_LIST.map((w) => ({
        key: w.key,
        title: w.seoTitle,
        text: w.description,
        link: w.route,
        tags: w.tags,
        searchText: [w.title, w.seoTitle, w.description, ...(w.aliases ?? [])].join(" "),
      })),
    []
  );

  const groups = useMemo(
    () => ["Все", "Соц сети", "Задачи", "Дубли", "Продажи", "Интерфейс", "Контроль"],
    []
  );

  const items: WidgetSearchItem[] = useMemo(
    () =>
      widgets.map((w) => ({
        key: w.key,
        title: w.title,
        text: w.text,
        tags: w.tags,
        link: w.link,
        searchText: w.searchText,
      })),
    [widgets]
  );

  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(groups[0] ?? "Все");
  const [tariffs, setTariffs] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!API_URL) {
      return;
    }

    const abortController = new AbortController();

    const loadTariffs = async () => {
      const loadedTariffs = await Promise.all(
        widgets.map(async (widget) => {
          try {
            const response = await fetch(
              `${API_URL}/subscribe/web/tariffs?widget_id=${encodeURIComponent(widget.key)}`,
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
              throw new Error(`Failed to load tariff for ${widget.key}: ${response.status}`);
            }

            const payload: unknown = await response.json();
            const tariff = extractTariffLabel(payload);

            return tariff ? [widget.key, tariff] : null;
          } catch (error) {
            if (abortController.signal.aborted) {
              return null;
            }

            console.warn("Не удалось загрузить тариф виджета", widget.key, error);
            return null;
          }
        })
      );

      setTariffs(
        Object.fromEntries(
          loadedTariffs.filter(
            (entry): entry is [string, string] => Array.isArray(entry) && entry.length === 2
          )
        )
      );
    };

    void loadTariffs();

    return () => {
      abortController.abort();
    };
  }, [widgets]);

  const filtered = useMemo(() => {
    const q = normalize(query);
    const g = normalize(selectedGroup);

    return items.filter((it) => {
      const title = normalize(it.title);
      const text = normalize(it.text ?? "");
      const searchText = normalize(it.searchText ?? "");
      const tags = (it.tags ?? []).map(normalize);

      const matchesQuery =
        !q ||
        title.includes(q) ||
        text.includes(q) ||
        searchText.includes(q) ||
        tags.some((t) => t.includes(q));

      const matchesGroup = g === normalize("Все") || tags.some((t) => t === g);

      return matchesQuery && matchesGroup;
    });
  }, [items, query, selectedGroup]);

  return (
    <div>
      <SearchWithGroups
        items={items}
        groups={groups}
        queryPlaceholder="Поиск по виджетам..."
        query={query}
        selectedGroup={selectedGroup}
        onQueryChange={setQuery}
        onGroupChange={setSelectedGroup}
      />

      <div className="mt-4 text-[14px] text-black/60">Найдено: {filtered.length}</div>

      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-[40px] min-h-[300px]">
        {filtered.map((widget, index) => (
          <ScrollReveal
            key={widget.link}
            variant="bubbleSoft"
            durationMs={700}
            delayMs={index % 2 === 0 ? 0 : 60}
            amount={0.35}
            className="h-full"
          >
            <WidgetsListItem
              key={widget.link}
              link={widget.link}
              text={widget.text}
              title={widget.title}
              tariff={tariffs[widget.key]}
              variant={getVariant(index)}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
