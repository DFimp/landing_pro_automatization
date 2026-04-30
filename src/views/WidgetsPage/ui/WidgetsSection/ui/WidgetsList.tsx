"use client";

import { useMemo, useState } from "react";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import {
  SearchWithGroups,
  SearchableItem,
} from "@/shared/ui/SearchWithGroups/SearchWithGroups";
import { WIDGETS_LIST } from "@/shared/constants";
import {
  CATEGORY_LABELS,
  WidgetCategory,
  WidgetsCatalogCard,
} from "./WidgetsCatalogCard";

const GROUP_ALL = "Все";
const PRICE_FROM_LABEL = "от 1 800 ₽";
const PRICE_FREE_LABEL = "Бесплатно";

const CATEGORY_ORDER: WidgetCategory[] = [
  "social",
  "tasks",
  "duplicates",
  "sales",
  "interface",
  "control",
  "integrations",
  "data",
];

const FREE_WIDGET_KEYS = new Set<string>(["time-zone", "super-tasks"]);

const TITLE_OVERRIDES: Record<string, string> = {
  "lead-distribution": "Распределение сделок",
  "duplicate-leads": "Дубликаты сделок",
  "massive-leads": "Массовое создание сделок",
  "other-leads": "Связанные сделки",
  "docs-flow": "Документы Google",
};

type WidgetsListProps = {
  priceLabelsByKey?: Record<string, string>;
};

type WidgetListItem = {
  key: string;
  widgetKey: string;
  title: string;
  text: string;
  link: string;
  tags: string[];
  searchText: string;
  category: WidgetCategory;
  categoryLabel: string;
  priceLabel: string;
};

type WidgetSearchItem = WidgetListItem & SearchableItem;

function normalize(value: string) {
  const prepared = (value ?? "").trim().toLowerCase();
  return prepared.replace(
    /[‐‑‒–—−﹣－]/g,
    "-"
  );
}

function hasAny(values: string[], keywords: string[]) {
  return keywords.some((keyword) =>
    values.some((value) => value.includes(normalize(keyword)))
  );
}

function resolveCategory(
  tags: string[],
  aliases: readonly string[],
  key: string,
  title: string,
  seoTitle: string
): WidgetCategory {
  const values = [...tags, ...aliases, key, title, seoTitle].map(normalize);

  if (
    hasAny(values, [
      "соц",
      "telegram",
      "whatsapp",
      "телеграм",
      "тг",
      "ватсап",
    ])
  ) {
    return "social";
  }

  if (hasAny(values, ["задач", "task"])) {
    return "tasks";
  }

  if (
    hasAny(values, [
      "дубл",
      "duplicate",
      "склей",
      "объедин",
    ])
  ) {
    return "duplicates";
  }

  if (
    hasAny(values, [
      "контрол",
      "запрет",
      "безопас",
      "доступ",
      "ban",
    ])
  ) {
    return "control";
  }

  if (
    hasAny(values, [
      "интеграц",
      "google",
      "документ",
      "t-bank",
      "тинькофф",
      "оплат",
      "финанс",
    ])
  ) {
    return "integrations";
  }

  if (
    hasAny(values, [
      "интерфейс",
      "карточ",
      "поле",
      "тег",
      "подсвет",
      "поиск",
      "лента",
      "shift",
      "группиров",
      "подсказ",
    ])
  ) {
    return "interface";
  }

  if (
    hasAny(values, [
      "продаж",
      "сделк",
      "ворон",
      "лид",
      "ltv",
      "календар",
    ])
  ) {
    return "sales";
  }

  return "data";
}

function formatPriceLabel(
  widgetKey: string,
  priceLabelsByKey?: Record<string, string>
) {
  const actualLabel = priceLabelsByKey?.[widgetKey];
  if (actualLabel) {
    return actualLabel;
  }

  return FREE_WIDGET_KEYS.has(widgetKey) ? PRICE_FREE_LABEL : PRICE_FROM_LABEL;
}

function toCompactDescription(value: string, maxLength = 115) {
  if (value.length <= maxLength) {
    return value;
  }

  const trimmed = value.slice(0, maxLength);
  const withWordBoundary = trimmed.slice(
    0,
    Math.max(trimmed.lastIndexOf(" "), 0)
  );
  return `${withWordBoundary.trimEnd()}...`;
}

export function WidgetsList({ priceLabelsByKey }: WidgetsListProps) {
  const widgets = useMemo<WidgetListItem[]>(
    () =>
      WIDGETS_LIST.map((widget) => {
        const category = resolveCategory(
          widget.tags,
          widget.aliases ?? [],
          widget.key,
          widget.title,
          widget.seoTitle
        );
        const categoryLabel = CATEGORY_LABELS[category];

        return {
          key: widget.key,
          widgetKey: widget.key,
          title: TITLE_OVERRIDES[widget.key] ?? widget.title,
          text: toCompactDescription(widget.description),
          link: widget.route,
          tags: [categoryLabel, ...widget.tags],
          category,
          categoryLabel,
          priceLabel: formatPriceLabel(widget.key, priceLabelsByKey),
          searchText: [
            widget.title,
            widget.seoTitle,
            widget.description,
            categoryLabel,
            ...widget.tags,
            ...(widget.aliases ?? []),
          ].join(" "),
        };
      }),
    [priceLabelsByKey]
  );

  const groups = useMemo(() => {
    const availableCategories = new Set(
      widgets.map((widget) => widget.category)
    );

    return [
      GROUP_ALL,
      ...CATEGORY_ORDER.filter((category) => availableCategories.has(category)).map(
        (category) => CATEGORY_LABELS[category]
      ),
    ];
  }, [widgets]);

  const items: WidgetSearchItem[] = useMemo(
    () =>
      widgets.map((widget) => ({
        key: widget.key,
        widgetKey: widget.widgetKey,
        title: widget.title,
        text: widget.text,
        tags: widget.tags,
        link: widget.link,
        searchText: widget.searchText,
        category: widget.category,
        categoryLabel: widget.categoryLabel,
        priceLabel: widget.priceLabel,
      })),
    [widgets]
  );

  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string>(
    groups[0] ?? GROUP_ALL
  );

  const filtered = useMemo(() => {
    const normalizedQuery = normalize(query);
    const normalizedGroup = normalize(selectedGroup);

    return items.filter((item) => {
      const title = normalize(item.title);
      const text = normalize(item.text ?? "");
      const searchText = normalize(item.searchText ?? "");
      const tags = (item.tags ?? []).map(normalize);

      const matchesQuery =
        !normalizedQuery ||
        title.includes(normalizedQuery) ||
        text.includes(normalizedQuery) ||
        searchText.includes(normalizedQuery) ||
        tags.some((tag) => tag.includes(normalizedQuery));

      const matchesGroup =
        normalizedGroup === normalize(GROUP_ALL) ||
        tags.some((tag) => tag === normalizedGroup);

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

      <div className="mt-4 text-[14px] text-black/60">
        Найдено: {filtered.length}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid min-h-[300px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((widget, index) => (
            <ScrollReveal
              key={widget.link}
              variant="lift"
              yFrom={14}
              durationMs={520}
              delayMs={Math.min(index * 30, 220)}
              amount={0.25}
              className="h-full"
            >
              <WidgetsCatalogCard
                widgetKey={widget.widgetKey}
                link={widget.link}
                text={widget.text}
                title={widget.title}
                category={widget.category}
                priceLabel={widget.priceLabel}
              />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[20px] border border-[#d9e4ff] bg-white px-6 py-8 text-center text-black/60">
          Ничего не найдено. Попробуйте другой запрос или категорию.
        </div>
      )}
    </div>
  );
}
