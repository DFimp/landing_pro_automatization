"use client";

import { useMemo, useRef, useState } from "react";

export type SearchableItem = {
  key: string;
  title: string;
  text?: string;
  tags?: string[];
};

function normalize(value: string) {
  return (value ?? "").trim().toLowerCase();
}

type Props<T extends SearchableItem> = {
  items: T[];
  groups: string[];
  queryPlaceholder?: string;
  suggestionsLimit?: number;

  query: string;
  selectedGroup: string;
  onQueryChange: (query: string) => void;
  onGroupChange: (group: string) => void;
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
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) {
      return [];
    }

    return items
      .filter((item) => normalize(item.title).includes(normalizedQuery))
      .slice(0, suggestionsLimit);
  }, [items, query, suggestionsLimit]);

  const closeDropdown = () => {
    setIsOpen(false);
    setActiveIndex(0);
  };

  const pickSuggestion = (item: T) => {
    onQueryChange(item.title);
    closeDropdown();
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto]">
        <div className="relative max-w-[640px]">
          <input
            value={query}
            onChange={(event) => {
              const value = event.target.value;
              onQueryChange(value);
              setIsOpen(Boolean(value.trim()));
              setActiveIndex(0);
            }}
            onFocus={() => query.trim() && setIsOpen(true)}
            onBlur={() => {
              blurTimeout.current = window.setTimeout(() => closeDropdown(), 120);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setIsOpen(true);
                setActiveIndex((index) =>
                  Math.min(index + 1, Math.max(0, suggestions.length - 1))
                );
              }

              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((index) => Math.max(index - 1, 0));
              }

              if (event.key === "Enter") {
                event.preventDefault();
                if (isOpen && suggestions[activeIndex]) {
                  pickSuggestion(suggestions[activeIndex]);
                }
              }

              if (event.key === "Escape") {
                event.preventDefault();
                closeDropdown();
              }
            }}
            placeholder={queryPlaceholder}
            className="h-[44px] w-full rounded-[12px] border border-[#3760E7]/30 bg-white/5 px-4 pr-[52px] text-[14px] outline-none transition focus:border-[#3760E7]/60"
          />

          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => setIsOpen(Boolean(query.trim()))}
            aria-label="Найти"
            className="absolute bottom-[4px] right-[4px] top-[4px] flex w-[36px] items-center justify-center rounded-[10px] bg-[#3760E7] text-white transition hover:opacity-90"
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
                if (blurTimeout.current) {
                  window.clearTimeout(blurTimeout.current);
                }
              }}
              className="absolute z-50 mt-2 w-full overflow-hidden rounded-[14px] border border-[#3760E7]/20 bg-white shadow-[0_12px_50px_rgba(0,0,0,0.12)]"
            >
              <ul className="py-1">
                {suggestions.map((item, index) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => pickSuggestion(item)}
                      className={`w-full px-4 py-2 text-left text-[14px] transition ${
                        index === activeIndex
                          ? "bg-[#3760E7]/10 text-black"
                          : "text-black/80 hover:bg-black/5"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {groups.map((group) => {
            const active = group === selectedGroup;
            return (
              <button
                key={group}
                type="button"
                onClick={() => onGroupChange(group)}
                className={`rounded-[12px] border px-3 py-2 text-[14px] transition ${
                  active
                    ? "border-[#3760E7] bg-[#3760E7] text-white"
                    : "border-black/10 bg-white text-black/80 hover:bg-black/5"
                }`}
              >
                {group}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
