"use client";

import { useMemo, useRef, useState } from "react";
import { ArticlesListItem } from "./ArticlesListItem";

type Article = {
    title: string;
    text: string;
    link: string;
    variant: number;
    tags: string[];
};

function normalize(s: string) {
    return s.trim().toLowerCase();
}

export function ArticlesList() {
    const articles: Article[] = [
        {
            title: "Как работать с дублями сделок в amoCRM — 3 кейса на практике",
            text:
                "Разбираем на реальных кейсах, как правильно объединять дубли сделок в amoCRM. Узнайте, как не потерять клиентов, сэкономить время менеджеров и навести порядок в базе CRM.",
            link: "/articles/duplicate-leads",
            variant: 1,
            tags: ["Дубли", "Продажи"],
        },
    ];

    const groups = useMemo(
        () => ["Все", "Дубли", "Автоматизация", "Продажи"],
        []
    );

    const [query, setQuery] = useState("");
    const [selectedGroup, setSelectedGroup] = useState<string>("Все");

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const blurTimeout = useRef<number | null>(null);

    const suggestions = useMemo(() => {
        const q = normalize(query);
        if (!q) return [];
        return articles.filter((a) => normalize(a.title).includes(q)).slice(0, 6);
    }, [query, articles]);

    const filtered = useMemo(() => {
        const q = normalize(query);

        return articles.filter((a) => {
            const matchesQuery =
                !q ||
                normalize(a.title).includes(q) ||
                normalize(a.text).includes(q) ||
                a.tags.some((t) => normalize(t).includes(q));

            const matchesGroup =
                selectedGroup === "Все" ||
                a.tags.some((t) => normalize(t) === normalize(selectedGroup));

            return matchesQuery && matchesGroup;
        });
    }, [query, selectedGroup, articles]);

    const pickSuggestion = (a: Article) => {
        setQuery(a.title);
        setIsOpen(false);
        setActiveIndex(0);
    };

    return (
        <div>
            <div className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
                    <div className="relative max-w-[640px]">
                        <input
                            value={query}
                            onChange={(e) => {
                                const v = e.target.value;
                                setQuery(v);
                                setIsOpen(Boolean(v.trim()));
                                setActiveIndex(0);
                            }}
                            onFocus={() => query.trim() && setIsOpen(true)}
                            onBlur={() => {
                                blurTimeout.current = window.setTimeout(() => {
                                    setIsOpen(false);
                                    setActiveIndex(0);
                                }, 120);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowDown") {
                                    e.preventDefault();
                                    setIsOpen(true);
                                    setActiveIndex((x) =>
                                        Math.min(x + 1, Math.max(0, suggestions.length - 1))
                                    );
                                }
                                if (e.key === "ArrowUp") {
                                    e.preventDefault();
                                    setActiveIndex((x) => Math.max(x - 1, 0));
                                }
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    if (isOpen && suggestions[activeIndex]) {
                                        pickSuggestion(suggestions[activeIndex]);
                                    }
                                }
                                if (e.key === "Escape") {
                                    setIsOpen(false);
                                    setActiveIndex(0);
                                }
                            }}
                            placeholder="Поиск по статьям..."
                            className="w-full h-[44px] rounded-[12px] bg-white/5 border border-[#3760E7]/30 px-4 pr-[52px] text-[14px] outline-none focus:border-[#3760E7]/60 transition"
                        />

                        <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setIsOpen(Boolean(query.trim()))}
                            aria-label="Найти"
                            className="absolute right-[4px] top-[4px] bottom-[4px] w-[36px] rounded-[10px] bg-[#3760E7] text-white hover:opacity-90 transition flex items-center justify-center"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M10.5 18.5C14.6421 18.5 18 15.1421 18 11C18 6.85786 14.6421 3.5 10.5 3.5C6.35786 3.5 3 6.85786 3 11C3 15.1421 6.35786 18.5 10.5 18.5Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21 21L16.65 16.65"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {isOpen && suggestions.length > 0 && (
                            <div
                                onMouseDown={() => {
                                    if (blurTimeout.current) window.clearTimeout(blurTimeout.current);
                                }}
                                className="absolute z-50 mt-2 w-full rounded-[14px] bg-white border border-[#3760E7]/20 overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.12)]"
                            >
                                <ul className="py-1">
                                    {suggestions.map((a, idx) => (
                                        <li key={a.link}>
                                            <button
                                                type="button"
                                                onClick={() => pickSuggestion(a)}
                                                className={`w-full text-left px-4 py-2 text-[14px] transition ${idx === activeIndex
                                                        ? "bg-[#3760E7]/10 text-black"
                                                        : "text-black/80 hover:bg-black/5"
                                                    }`}
                                            >
                                                {a.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {groups.map((g) => {
                            const active = g === selectedGroup;
                            return (
                                <button
                                    key={g}
                                    type="button"
                                    onClick={() => setSelectedGroup(g)}
                                    className={`px-3 py-2 rounded-[12px] text-[14px] border transition ${active
                                            ? "bg-[#3760E7] text-white border-[#3760E7]"
                                            : "bg-white text-black/80 border-black/10 hover:bg-black/5"
                                        }`}
                                >
                                    {g}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-4 text-[14px] text-black/60">
                    Найдено: {filtered.length}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
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
