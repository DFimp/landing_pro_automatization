"use client";

import { useMemo, useState } from "react";
import { ArticlesListItem } from "./ArticlesListItem";
import {
    SearchWithGroups,
    SearchableItem,
} from "@/shared/ui/SearchWithGroups/SearchWithGroups";

type Article = {
    title: string;
    text: string;
    link: string;
    variant: number;
    tags: string[];
};

type ArticleSearchItem = Article & SearchableItem;

function normalize(s: string) {
    return (s ?? "").trim().toLowerCase();
}

const ARTICLES: Article[] = [
    {
        title: "Как работать с дублями сделок в amoCRM — 3 кейса на практике",
        text:
            "Разбираем на реальных кейсах, как правильно объединять дубли сделок в amoCRM. Узнайте, как не потерять клиентов, сэкономить время менеджеров и навести порядок в базе CRM.",
        link: "/articles/duplicate-leads",
        variant: 1,
        tags: ["Дубли", "Продажи"],
    },
];

const GROUPS = ["Все", "Дубли", "Автоматизация", "Продажи"] as const;

export function ArticlesList() {
    const [query, setQuery] = useState("");
    const [selectedGroup, setSelectedGroup] = useState<string>("Все");

    const items: ArticleSearchItem[] = useMemo(
        () =>
            ARTICLES.map((a) => ({
                key: a.link,
                title: a.title,
                text: a.text,
                tags: a.tags,
                link: a.link,
                variant: a.variant,
            })),
        []
    );

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
                groups={[...GROUPS]}
                queryPlaceholder="Поиск по статьям..."
                query={query}
                selectedGroup={selectedGroup}
                onQueryChange={setQuery}
                onGroupChange={setSelectedGroup}
            />

            <div className="mt-4 text-[14px] text-black/60">
                Найдено: {filtered.length}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] min-h-[300px]">
                {filtered.map((article) => (
                    <ArticlesListItem
                        key={article.link}
                        title={article.title}
                        text={article.text}
                        link={article.link}
                        variant={article.variant}
                    />
                ))}
            </div>
        </div>
    );
}
