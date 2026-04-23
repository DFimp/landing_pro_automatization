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

const GROUP_ALL = "\u0412\u0441\u0435";
const PRICE_FROM_LABEL = "\u043e\u0442 1 800 \u20BD";
const PRICE_FREE_LABEL = "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e";

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

const FREE_WIDGET_KEYS = new Set<string>(["time-zone"]);

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
    /[\u2010\u2011\u2012\u2013\u2014\u2212\uFE63\uFF0D]/g,
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
      "\u0441\u043e\u0446",
      "telegram",
      "whatsapp",
      "\u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c",
      "\u0442\u0433",
      "\u0432\u0430\u0442\u0441\u0430\u043f",
    ])
  ) {
    return "social";
  }

  if (hasAny(values, ["\u0437\u0430\u0434\u0430\u0447", "task"])) {
    return "tasks";
  }

  if (
    hasAny(values, [
      "\u0434\u0443\u0431\u043b",
      "duplicate",
      "\u0441\u043a\u043b\u0435\u0439",
      "\u043e\u0431\u044a\u0435\u0434\u0438\u043d",
    ])
  ) {
    return "duplicates";
  }

  if (
    hasAny(values, [
      "\u043a\u043e\u043d\u0442\u0440\u043e\u043b",
      "\u0437\u0430\u043f\u0440\u0435\u0442",
      "\u0431\u0435\u0437\u043e\u043f\u0430\u0441",
      "\u0434\u043e\u0441\u0442\u0443\u043f",
      "ban",
    ])
  ) {
    return "control";
  }

  if (
    hasAny(values, [
      "\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446",
      "google",
      "\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",
      "t-bank",
      "\u0442\u0438\u043d\u044c\u043a\u043e\u0444\u0444",
      "\u043e\u043f\u043b\u0430\u0442",
      "\u0444\u0438\u043d\u0430\u043d\u0441",
    ])
  ) {
    return "integrations";
  }

  if (
    hasAny(values, [
      "\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",
      "\u043a\u0430\u0440\u0442\u043e\u0447",
      "\u043f\u043e\u043b\u0435",
      "\u0442\u0435\u0433",
      "\u043f\u043e\u0434\u0441\u0432\u0435\u0442",
      "\u043f\u043e\u0438\u0441\u043a",
      "\u043b\u0435\u043d\u0442\u0430",
      "shift",
      "\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432",
      "\u043f\u043e\u0434\u0441\u043a\u0430\u0437",
    ])
  ) {
    return "interface";
  }

  if (
    hasAny(values, [
      "\u043f\u0440\u043e\u0434\u0430\u0436",
      "\u0441\u0434\u0435\u043b\u043a",
      "\u0432\u043e\u0440\u043e\u043d",
      "\u043b\u0438\u0434",
      "ltv",
      "\u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440",
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
        queryPlaceholder={
          "\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0432\u0438\u0434\u0436\u0435\u0442\u0430\u043c..."
        }
        query={query}
        selectedGroup={selectedGroup}
        onQueryChange={setQuery}
        onGroupChange={setSelectedGroup}
      />

      <div className="mt-4 text-[14px] text-black/60">
        {"\u041d\u0430\u0439\u0434\u0435\u043d\u043e"}: {filtered.length}
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
          {
            "\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u043b\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e."
          }
        </div>
      )}
    </div>
  );
}
