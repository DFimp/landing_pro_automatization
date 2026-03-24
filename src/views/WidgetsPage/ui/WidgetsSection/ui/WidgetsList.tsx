"use client";

import { useMemo, useState } from "react";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { SearchWithGroups, SearchableItem } from "@/shared/ui/SearchWithGroups/SearchWithGroups";
import { WIDGETS_LIST } from "@/shared/constants";
import { WidgetsListItem } from "./WidgetsListItem";

const VARIANT_PATTERN = [2, 1, 1, 3, 4, 1] as const;
const getVariant = (index: number) => VARIANT_PATTERN[index % VARIANT_PATTERN.length];

type Widget = {
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

export function WidgetsList() {
  const widgets: Widget[] = WIDGETS_LIST.map((w) => ({
    title: w.seoTitle,
    text: w.description,
    link: w.route,
    tags: w.tags,
    searchText: [
      w.title,
      w.seoTitle,
      w.description,
      ...(w.aliases ?? []),
    ].join(" "),
  }));

  const groups = useMemo(
    () => ["Все", "Соц сети", "Задачи", "Дубли", "Продажи", "Интерфейс", "Контроль"],
    []
  );

  const items: WidgetSearchItem[] = useMemo(
    () =>
      widgets.map((w) => ({
        key: w.link,
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
            variant={getVariant(index)}
          />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
