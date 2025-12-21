"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { WidgetsListItem } from "./WidgetsListItem";

type Widget = {
  title: string;
  text: string;
  link: string;
  variant: number;
  tags: string[];
};

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function WidgetsList() {
  const router = useRouter();

  const widgets: Widget[] = [
    {
      text: `Получайте мгновенные уведомления в Telegram
                и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами прямо 
                в мессенджере.`,
      title: `Телеграм уведомления для amoCRM`,
      link: "/widgets/telegram-notify",
      variant: 2,
      tags: ["Соц сети", "Telegram", "Уведомления"],
    },
    {
      text: `Автоматическое распределение новых сделок между менеджерами по процентам, максимальному количеству или равными долями. Учет контактов, компаний и активности менеджеров.`,
      title: `Распределение сделок для amoCRM`,
      link: "/widgets/lead-distribution",
      variant: 1,
      tags: ["Продажи", "Распределение"],
    },
    {
      text: `Автоматическое склеивание дублированных сделок
с сохранением всех важных данных. Экономьте время менеджеров и улучшайте качество вашей базы данных.`,
      title: `Дубли сделок (объединение дублей сделок) для amoCRM`,
      link: "/widgets/duplicate-leads",
      variant: 1,
      tags: ["База", "Дубли", "Качество данных"],
    },
    {
      text: `Автоматическое склеивание дублированных контактов с умными алгоритмами поиска. Экономьте время менеджеров и улучшайте качество вашей базы контактов.`,
      title: `Дубли контактов (объединение дублей контактов) для amoCRM`,
      link: "/widgets/duplicate-contacts",
      variant: 3,
      tags: ["База", "Дубли", "Контакты", "Качество данных"],
    },
    {
      text: `Автоматически определяйте регион и текущее время клиента по номеру телефона. Никогда больше 
не разбудите клиента в 6 утра или не позвоните 
в полночь!`,
      title: `Регион по телефону для amoCRM`,
      link: "/widgets/time-zone",
      variant: 4,
      tags: ["Телефония", "Продажи"],
    },
    {
      text: `Автоматически создавайте задачи для сделок без активности. Настраиваемые статусы, типы задач
и ответственные. Увеличьте конверсию на 35% благодаря своевременному контакту с клиентами.`,
      title: `Автозадачи в сделках для amoCRM`,
      link: "/widgets/auto-tasks",
      variant: 1,
      tags: ["Задачи", "Контроль", "Продажи"],
    },
    {
      text: `Автоматизируйте создание сделок для всех ваших контактов одним нажатием. Забудьте о рутинной работе - виджет сделает всё за вас быстро и без ошибок.`,
      title: `Массовое создание сделок для amoCRM`,
      link: "/widgets/massive-leads",
      variant: 2,
      tags: ["Продажи", "Автоматизация"],
    },
    {
      text: `Виджет не даст закрыть задачу без описания результата. Полная прозрачность работы команды и контроль качества выполнения.`,
      title: `Запрет закрытия задач без результата для amoCRM`,
      link: "/widgets/closing-ban",
      variant: 1,
      tags: ["Задачи", "Контроль"],
    },
    {
      text: `Превратите каждый номер телефона в прямую ссылку на чат с клиентом в Telegram. Больше никакого копирования номеров и поиска контактов!`,
      title: `Мгновенный переход в Telegram из amoCRM`,
      link: "/widgets/telegram-button",
      variant: 1,
      tags: ["Соц сети", "Telegram"],
    },
    {
      text: `Превратите каждый номер телефона в прямую ссылку на чат с клиентом в WhatsApp. Мгновенное общение с клиентами прямо из карточки сделки!`,
      title: `Мгновенный переход в WhatsApp из amoCRM`,
      link: "/widgets/whatsapp-button",
      variant: 3,
      tags: ["Соц сети", "WhatsApp"],
    },
    {
      text: `Полный контроль над удалением задач в amoCRM. Ограничьте удаление для менеджеров, настраивайте исключения по типам задач и защитите вашу воронку от случайных и намеренных потерь активности.`,
      title: `Запрет удаления задач для amoCRM`,
      link: "/widgets/delete-tasks-ban",
      variant: 4,
      tags: ["Задачи", "Контроль"],
    },
    {
      text: `Мгновенно выделяйте группы сделок, контактов и компаний с помощью Shift и протягивания мышкой. Ускорьте массовое изменение ответственных, статусов, запуск автоматизаций и другие групповый действия в amoCRM.`,
      title: `Групповое выделение (Shift-выбор) для amoCRM`,
      link: "/widgets/shift-select",
      variant: 1,
      tags: ["Интерфейс", "Ускорение работы"],
    },
    {
      text: `Автоматически группируйте поля в карточке сделки по логической структуре. Удобная навигация, свертываемые группы и аккуратный внешний вид, даже при большом числе полей.`,
      title: `Группировка полей для amoCRM`,
      link: "/widgets/group-fields",
      variant: 2,
      tags: ["Интерфейс", "Карточка сделки"],
    },
  ];

  const groups = useMemo(
    () => ["Все", "Соц сети", "Задачи", "Дубли", "Продажи", "Интерфейс", "Контроль"],
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
    return widgets
      .filter((w) => normalize(w.title).includes(q))
      .slice(0, 6);
  }, [query, widgets]);

  const filtered = useMemo(() => {
    const q = normalize(query);

    return widgets.filter((w) => {
      const matchesQuery =
        !q ||
        normalize(w.title).includes(q) ||
        normalize(w.text).includes(q) ||
        w.tags.some((t) => normalize(t).includes(q));

      const matchesGroup =
        selectedGroup === "Все" ||
        w.tags.some((t) => normalize(t) === normalize(selectedGroup));

      return matchesQuery && matchesGroup;
    });
  }, [query, selectedGroup, widgets]);

  const pickSuggestion = (w: Widget) => {
    setQuery(w.title);
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
                  setActiveIndex((x) => Math.min(x + 1, Math.max(0, suggestions.length - 1)));
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
              placeholder="Поиск по виджетам..."
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
                  {suggestions.map((w, idx) => (
                    <li key={w.link}>
                      <button
                        type="button"
                        onClick={() => pickSuggestion(w)}
                        className={`w-full text-left px-4 py-2 text-[14px] transition ${idx === activeIndex
                            ? "bg-[#3760E7]/10 text-black"
                            : "text-black/80 hover:bg-black/5"
                          }`}
                      >
                        {w.title}
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

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-[40px]">
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
