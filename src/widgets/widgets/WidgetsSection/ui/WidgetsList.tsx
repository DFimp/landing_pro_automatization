"use client";

import { useMemo, useState } from "react";
import { WidgetsListItem } from "./WidgetsListItem";
import { SearchWithGroups, SearchableItem } from "@/shared/ui/SearchWithGroups/SearchWithGroups";

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
  const widgets: Widget[] = [
    {
      text: `Получайте мгновенные уведомления в Telegram
                и запускайте SalesBot одним нажатием. Полная автоматизация коммуникаций с клиентами прямо 
                в мессенджере.`,
      title: `Телеграм уведомления для amoCRM`,
      link: "/widgets/telegram-notify",
      variant: 2,
      tags: ["Соц сети", "Telegram", "тг", "телеграм", "Уведомления"],
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
      tags: ["Соц сети", "Telegram", "тг", "телеграм"],
    },
    {
      text: `Превратите каждый номер телефона в прямую ссылку на чат с клиентом в WhatsApp. Мгновенное общение с клиентами прямо из карточки сделки!`,
      title: `Мгновенный переход в WhatsApp из amoCRM`,
      link: "/widgets/whatsapp-button",
      variant: 3,
      tags: ["Соц сети", "WhatsApp", "Ватсап", "Продажи"],
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
    {
      text: `Автоматически переносит длинные названия пользовательских полей в карточках amoCRM. Убирает многоточия, предотвращает наложения и делает интерфейс аккуратным и читаемым.`,
      title: `Перенос длинных названий полей для amoCRM`,
      link: "/widgets/transfer-fields",
      variant: 1,
      tags: ["Интерфейс", "Карточка сделки"],
    },
    {
      text: `Полный контроль над удалением и редактированием примечаний в amoCRM. Ограничивайте действия менеджеров, защищайте историю коммуникаций и предотвращайте случайные или намеренные потери важных комментариев.`,
      title: `Запрет удаления и редактирования примечаний для amoCRM`,
      link: "/widgets/delete-notes-ban",
      variant: 1,
      tags: ["Интерфейс", "Карточка сделки"],
    },
    {
      text: `Фильтруйте ленту событий в карточке сделки по типам: задачи, примечания, письма, звонки и чаты. Быстро находите нужную активность без прокрутки и хаоса, даже в длинной истории сделки.`,
      title: `Фильтр ленты событий в сделке для amoCRM`,
      link: "/widgets/settings-feed",
      variant: 2,
    },
  ];

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
