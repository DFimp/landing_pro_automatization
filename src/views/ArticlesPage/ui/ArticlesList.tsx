"use client";

import { useMemo, useState } from "react";
import { ArticlesListItem } from "./ArticlesListItem";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
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
    text: "Разбираем на реальных кейсах, как правильно объединять дубли сделок в amoCRM. Узнайте, как не потерять клиентов, сэкономить время менеджеров и навести порядок в базе CRM.",
    link: "/articles/duplicate-leads",
    variant: 1,
    tags: ["Дубли", "Продажи"],
  },
  {
    title: "amoCRM: почему эта CRM реально помогает бизнесу продавать больше",
    text: "Чем amoCRM хороша для бизнеса: воронка продаж, омниканальность, роботы и триггеры, интеграции и ошибки настройки.",
    link: "/articles/amocrm-helps-sell",
    variant: 2,
    tags: ["Продажи", "Автоматизация"],
  },
  {
    title: "Быстрая настройка amoCRM: чеклист для новичков за 1 день",
    text: "Пошаговый чеклист быстрой настройки amoCRM: воронка продаж, источники заявок, автоматизация, задачи и аналитика без лишних действий.",
    link: "/articles/amocrm-quick-setup",
    variant: 3,
    tags: ["CRM", "Настройка", "Продажи"],
  },
  {
    title: "Внедрение amoCRM под процессы бизнеса - не просто настройка CRM",
    text: "Как внедрить amoCRM под реальные процессы бизнеса: заявки, этапы, задачи, роли, источники, отчеты, автоматизация и контроль продаж.",
    link: "/articles/amocrm-business-process-implementation",
    variant: 4,
    tags: ["CRM", "Внедрение", "Автоматизация"],
  },
  {
    title: "Автоматизация отдела продаж в amoCRM - убрать ручную работу",
    text: "Автоматизация отдела продаж в amoCRM: заявки, задачи, недозвоны, распределение, уведомления, документы, счета, дубли, отчеты и контроль менеджеров.",
    link: "/articles/amocrm-remove-manual-work",
    variant: 2,
    tags: ["CRM", "Автоматизация", "Продажи"],
  },
  {
    title: "Виджеты для amoCRM: когда стандартных функций уже не хватает",
    text: "Разбираем, когда бизнесу нужны виджеты для amoCRM, какие задачи они закрывают и как понять, что пора дорабатывать CRM.",
    link: "/articles/amocrm-standard-solutions",
    variant: 1,
    tags: ["CRM", "Виджеты", "Автоматизация"],
  },
  {
    title: "Дубли в amoCRM: почему портят продажи и как их убрать",
    text: "Разбираем, чем опасны дубли контактов и сделок в amoCRM, почему они появляются и как навести порядок в базе без ручной чистки.",
    link: "/articles/amocrm-ruined-sales",
    variant: 3,
    tags: ["Дубли", "CRM", "Продажи"],
  },
  {
    title: "Настройка amoCRM: что нужно сделать, чтобы CRM работала",
    text: "Разбираем, что входит в настройку amoCRM: воронки, поля, задачи, источники, права, уведомления, аналитику и контроль менеджеров.",
    link: "/articles/amocrm-working-crm",
    variant: 4,
    tags: ["CRM", "Настройка", "Продажи"],
  },
  {
    title: "Как не терять заявки в amoCRM - настройка контроля лидов",
    text: "Разбираем, почему заявки теряются в amoCRM и что настроить: источники, задачи, уведомления, этапы, контроль менеджеров и аналитику.",
    link: "/articles/amocrm-lead-control",
    variant: 2,
    tags: ["CRM", "Продажи", "Контроль"],
  },
  {
    title: "Настройка amoCRM цена - от чего зависит стоимость работ",
    text: "Сколько стоит настройка amoCRM: что входит в работу, от чего зависит цена, какие бывают уровни настройки и почему дешевый запуск часто приходится переделывать.",
    link: "/articles/amocrm-cost-dependence",
    variant: 1,
    tags: ["CRM", "Настройка", "Стоимость"],
  },
  {
    title: "CRM-аудит amoCRM: что показывает проверка настроек",
    text: "Разбираем, зачем нужен CRM-аудит amoCRM, какие проблемы он находит и как понять, что текущая настройка мешает продажам.",
    link: "/articles/amocrm-check-settings",
    variant: 3,
    tags: ["CRM", "Аудит", "Контроль"],
  },
  {
    title: "Как понять, что amoCRM настроена неправильно",
    text: "Разбираем признаки неправильной настройки amoCRM: потерянные заявки, просрочки, дубли, слабый контроль менеджеров и неточная аналитика.",
    link: "/articles/amocrm-incorrect-settings",
    variant: 4,
    tags: ["CRM", "Аудит", "Настройка"],
  },
  {
    title: "Автоматические задачи в amoCRM: где они реально помогают",
    text: "Разбираем, как автоматические задачи в amoCRM помогают не терять заявки, контролировать менеджеров, обрабатывать недозвоны и снижать ручную работу.",
    link: "/articles/amocrm-real-help",
    variant: 2,
    tags: ["CRM", "Автоматизация", "Контроль"],
  },
  {
    title: "Уведомления из amoCRM в Telegram: когда они нужны бизнесу",
    text: "Разбираем, зачем нужны Telegram-уведомления из amoCRM, какие события стоит выводить в чат и как не превратить уведомления в шум.",
    link: "/articles/amocrm-notice-in-tg",
    variant: 1,
    tags: ["CRM", "Автоматизация", "Контроль"],
  },
  {
    title: "Какие отчеты нужны руководителю отдела продаж в amoCRM",
    text: "Разбираем, какие отчеты в amoCRM нужны руководителю продаж: заявки, источники, задачи, менеджеры, конверсия, причины отказов и потери.",
    link: "/articles/amocrm-reports-manager",
    variant: 3,
    tags: ["CRM", "Аналитика", "Контроль"],
  },
];

const GROUPS = [
  "Все",
  "Дубли",
  "Настройка",
  "Контроль",
  "Автоматизация",
  "Аналитика",
  "Продажи",
  "Внедрение",
  "Виджеты",
  "Стоимость",
  "Аудит",
] as const;

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
    [],
  );

  const filtered = useMemo(() => {
    const q = normalize(query);
    const g = normalize(selectedGroup);

    return items.filter((it) => {
      const title = normalize(it.title);
      const text = normalize(it.text ?? "");
      const tags = (it.tags ?? []).map(normalize);

      const matchesQuery =
        !q ||
        title.includes(q) ||
        text.includes(q) ||
        tags.some((t) => t.includes(q));

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

      <div className="mt-4 text-[14px] text-black/60">Найдено: {filtered.length}</div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] min-h-[300px]">
        {filtered.map((article, index) => (
          <ScrollReveal
            key={article.link}
            variant="bubbleSoft"
            durationMs={700}
            delayMs={index % 3 === 0 ? 0 : 60}
            amount={0.35}
            className="h-full"
          >
            <ArticlesListItem
              title={article.title}
              text={article.text}
              link={article.link}
              variant={article.variant}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
