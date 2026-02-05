"use client";

import { useMemo, useState } from "react";
import { WidgetsListItem } from "./WidgetsListItem";
import { SearchWithGroups, SearchableItem } from "@/shared/ui/SearchWithGroups/SearchWithGroups";
import { WIDGETS_LIST } from "@/shared/constants";

type Widget = {
  title: string;
  text: string;
  link: string;
  variant: number;
  tags: string[];
};

type WidgetSearchItem = Widget &
  SearchableItem & {
};

function normalize(s: string) {
  return (s ?? "").trim().toLowerCase();
}

export function WidgetsList() {
  const widgets: Widget[] = WIDGETS_LIST.map(w => ({
    title: w.seoTitle,
    text: w.description,
    link: w.route,
    variant: w.variant,
    tags: w.tags,
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
        variant: w.variant,
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
      const tags = (it.tags ?? []).map(normalize);

      const matchesQuery =
        !q || title.includes(q) || text.includes(q) || tags.some((t) => t.includes(q));

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
        {filtered.map((widget) => (
          <WidgetsListItem
            key={widget.link}
            link={widget.link}
            text={widget.text}
            title={widget.title}
            variant={widget.variant}
          />
        ))}
      </div>
    </div>
  );
}
