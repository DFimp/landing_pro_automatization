"use client";

import { useMemo, useRef, useState } from "react";

export type SearchableItem = {
    key: string;
    title: string;
    text?: string;
    tags?: string[];
};

function normalize(s: string) {
    return (s ?? "").trim().toLowerCase();
}

type Props<T extends SearchableItem> = {
    items: T[];
    groups: string[];
    queryPlaceholder?: string;
    suggestionsLimit?: number;

    query: string;
    selectedGroup: string;
    onQueryChange: (q: string) => void;
    onGroupChange: (g: string) => void;
};

export function SearchWithGroups<T extends SearchableItem>({
    items,
    groups,
    queryPlaceholder = "Поиск...",
    suggestionsLimit = 6,

    query,
    selectedGroup,
    onQueryChange,
    onGroupChange,
}: Props<T>) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const blurTimeout = useRef<number | null>(null);

    const suggestions = useMemo(() => {
        const q = normalize(query);
        if (!q) return [];
        return items
            .filter((it) => normalize(it.title).includes(q))
            .slice(0, suggestionsLimit);
    }, [items, query, suggestionsLimit]);

    const closeDropdown = () => {
        setIsOpen(false);
        setActiveIndex(0);
    };

    const pickSuggestion = (it: T) => {
        onQueryChange(it.title);
        closeDropdown();
    };

    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
                <div className="relative max-w-[640px]">
                    <input
                        value={query}
                        onChange={(e) => {
                            const v = e.target.value;
                            onQueryChange(v);
                            setIsOpen(Boolean(v.trim()));
                            setActiveIndex(0);
                        }}
                        onFocus={() => query.trim() && setIsOpen(true)}
                        onBlur={() => {
                            blurTimeout.current = window.setTimeout(() => closeDropdown(), 120);
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
                                e.preventDefault();
                                closeDropdown();
                            }
                        }}
                        placeholder={queryPlaceholder}
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
                                {suggestions.map((it, idx) => (
                                    <li key={it.key}>
                                        <button
                                            type="button"
                                            onClick={() => pickSuggestion(it)}
                                            className={`w-full text-left px-4 py-2 text-[14px] transition ${idx === activeIndex
                                                ? "bg-[#3760E7]/10 text-black"
                                                : "text-black/80 hover:bg-black/5"
                                                }`}
                                        >
                                            {it.title}
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
                                onClick={() => onGroupChange(g)}
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
        </div>
    );
}
