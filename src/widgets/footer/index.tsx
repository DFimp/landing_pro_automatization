"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useHiddenInIframe } from "@/shared/utils/useHiddenInIframe";
import {
  WIDGETS,
  POPULAR_WIDGET_KEYS,
  type WidgetKey,
} from "@/shared/constants/widgets";

type FooterLink = { label: string; href: string };

type WidgetItem = {
  key: WidgetKey;
  label: string;
  href: string;
  aliases?: readonly string[];
};

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export const Footer = () => {
  const { isIframe } = useHiddenInIframe();
  const router = useRouter();

  const widgetsForSearch: WidgetItem[] = useMemo(() => {
    return WIDGETS.map((w) => ({
      key: w.key,
      label: w.title,
      href: w.route,
      aliases: w.aliases,
    }));
  }, []);

  const popularWidgets: FooterLink[] = useMemo(() => {
    const byKey = Object.fromEntries(WIDGETS.map((w) => [w.key, w])) as Record<
      WidgetKey,
      (typeof WIDGETS)[number]
    >;

    return POPULAR_WIDGET_KEYS.map((key) => ({
      label: byKey[key].title,
      href: byKey[key].route,
    }));
  }, []);

  const cols = useMemo(
    () => [
      {
        title: "Услуги",
        items: [
          { label: "Аудит", href: "/#audit" },
          { label: "Внедрение", href: "/#implementation" },
          { label: "Сопровождение", href: "/#support" },
          { label: "Лицензия", href: "/license" },
          { label: "Статьи", href: "/articles" },
          { label: "Кейсы", href: "/cases" },
        ] as FooterLink[],
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<WidgetItem | null>(null);

  const blurTimeout = useRef<number | null>(null);

  const suggestions = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];

    return widgetsForSearch
      .map((w) => {
        const hay = normalize(w.label);
        const inTitle = hay.includes(q);
        const inAlias = (w.aliases ?? []).some((a) => normalize(a).includes(q));
        const starts = hay.startsWith(q);

        let score = 0;
        if (starts) score += 100;
        if (inTitle) score += 50;
        if (inAlias) score += 25;

        return { w, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((x) => x.w);
  }, [query, widgetsForSearch]);

  const closeDropdown = () => {
    setIsOpen(false);
    setActiveIndex(0);
  };

  const pickWidget = (w: WidgetItem) => {
    setSelected(w);
    setQuery(w.label);
    closeDropdown();
  };

  const go = () => {
    if (selected) {
      router.push(selected.href);
      return;
    }

    const q = normalize(query);
    const exact = widgetsForSearch.find((w) => normalize(w.label) === q);
    if (exact) {
      router.push(exact.href);
      return;
    }

    const trimmed = query.trim();
    if (trimmed) router.push(`/widgets?search=${encodeURIComponent(trimmed)}`);
  };

  if (isIframe) return null;

  return (
    <footer>
      <div
        className="w-full rounded-b-[24px] text-white
        bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(108,0,255,.22),transparent_60%),radial-gradient(1000px_500px_at_100%_0%,rgba(0,102,255,.22),transparent_60%),linear-gradient(180deg,#1a1530_0%,#0f1427_100%)]"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-6 md:py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="-ml-2 sm:-ml-3">
              <Link href="/">
                <Image
                  src="/widgets/footer/footer_logo.webp"
                  alt="Про Автоматизацию"
                  width={210}
                  height={60}
                  className="block w-[210px] h-auto"
                  priority
                  quality={85}
                  fetchPriority="high"
                />
              </Link>
            </div>

            <div className="mt-6 text-[14px] leading-relaxed text-[#e9ecff]">
              <div>
                Email:{" "}
                <a className="hover:underline" href="mailto:info@pro-automatization.ru">
                  info@pro-automatization.ru
                </a>
              </div>
              <div>
                Телефон:{" "}
                <a className="hover:underline" href="tel:+78652222923">
                  +7 (865) 222-29-23
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:pl-4 gap-10">
            <nav>
              <div className="mb-3 text-[16px] font-semibold text-white/95">
                {cols[0].title}
              </div>
              <ul className="space-y-2 text-[14px] text-[#e9ecff]">
                {cols[0].items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className="hover:text-white transition-colors">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <Link
                href="/widgets"
                className="mb-3 inline-flex items-center gap-2
                text-[16px] font-semibold text-white/95
                hover:text-white transition"
              >
                Виджеты
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <div className="w-full">
                <div className="relative">
                  <input
                    value={query}
                    onChange={(e) => {
                      const v = e.target.value;
                      setQuery(v);
                      setSelected(null);
                      setIsOpen(Boolean(v.trim()));
                      setActiveIndex(0);
                    }}
                    onFocus={() => {
                      if (query.trim()) setIsOpen(true);
                    }}
                    onBlur={() => {
                      blurTimeout.current = window.setTimeout(() => closeDropdown(), 120);
                    }}
                    onKeyDown={(e) => {
                      if (!isOpen && e.key === "Enter") {
                        e.preventDefault();
                        go();
                        return;
                      }

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
                          pickWidget(suggestions[activeIndex]);
                        } else {
                          go();
                        }
                      }
                      if (e.key === "Escape") {
                        e.preventDefault();
                        closeDropdown();
                      }
                    }}
                    placeholder="Поиск по виджетам..."
                    className="w-full h-[44px] rounded-[12px] bg-white/5 border border-white/15 px-4 pr-[48px] text-[14px] text-white placeholder:text-white/55 outline-none focus:border-white/35 transition"
                  />

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => go()}
                    aria-label="Найти"
                    className="absolute right-[4px] top-[4px] bottom-[4px] w-[36px] rounded-[10px] bg-white/10 hover:bg-white/15 border border-white/15 transition flex items-center justify-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-90"
                    >
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
                      className="absolute z-50 mt-2 w-full rounded-[14px] bg-[#0f1427] border border-white/12 overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.45)]"
                    >
                      <ul className="py-1">
                        {suggestions.map((w, idx) => (
                          <li key={w.href}>
                            <button
                              type="button"
                              onClick={() => pickWidget(w)}
                              className={`w-full text-left px-4 py-2 text-[14px] transition ${idx === activeIndex
                                  ? "bg-white/10 text-white"
                                  : "text-[#e9ecff] hover:bg-white/8 hover:text-white"
                                }`}
                            >
                              {w.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-5 text-[14px] text-white/85 font-semibold">
                  Популярные:
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {popularWidgets.map((w) => (
                    <Link
                      key={w.href}
                      href={w.href}
                      className="px-3 py-2 rounded-[12px] bg-white/6 border border-white/12 text-[14px] text-[#e9ecff] hover:text-white hover:bg-white/10 transition"
                    >
                      {w.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 w-full">
        <div className="mx-auto max-w-[1200px] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[14px] text-[#4b4b4b]">
          <div>ИП Горбань М.О. (ИНН 262609479757)</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:underline">
              Политика конфиденциальности
            </Link>
            <Link
              href="https://t.me/proavtomatization_support_bot"
              target="_blank"
              className="hover:underline"
            >
              Написать в поддержку
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
