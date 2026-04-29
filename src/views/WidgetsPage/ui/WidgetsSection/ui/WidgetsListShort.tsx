import Link from "next/link";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";
import { WIDGETS_LIST } from "@/shared/constants";
import {
  WidgetCategory,
  WidgetsCatalogCard,
} from "./WidgetsCatalogCard";

const PRICE_FROM_LABEL = "от 1 800 ₽";
const PRICE_FREE_LABEL = "Бесплатно";
const FREE_WIDGET_KEYS = new Set<string>(["time-zone"]);

const SHORT_WIDGET_KEYS = [
  "telegram-notify",
  "max-notice",
  "lead-distribution",
  "duplicate-leads",
  "duplicate-contacts",
  "docs-flow",
  "meet-calendar",
  "t-bank",
];

function normalize(value: string) {
  return (value ?? "").trim().toLowerCase();
}

function hasAny(values: string[], keywords: string[]) {
  return keywords.some((keyword) =>
    values.some((value) => value.includes(normalize(keyword)))
  );
}

function resolveCategory(
  tags: string[],
  aliases: readonly string[],
  key: string,
  title: string,
  seoTitle: string
): WidgetCategory {
  const values = [...tags, ...aliases, key, title, seoTitle].map(normalize);

  if (
    hasAny(values, [
      "соц",
      "telegram",
      "whatsapp",
      "телеграм",
      "тг",
      "ватсап",
    ])
  ) {
    return "social";
  }

  if (hasAny(values, ["задач", "task"])) {
    return "tasks";
  }

  if (
    hasAny(values, ["дубл", "duplicate", "склей", "объедин"])
  ) {
    return "duplicates";
  }

  if (
    hasAny(values, ["контроль", "запрет", "безопас", "доступ", "ban"])
  ) {
    return "control";
  }

  if (
    hasAny(values, [
      "интеграц",
      "google",
      "документ",
      "t-bank",
      "тинькофф",
      "оплат",
      "финанс",
    ])
  ) {
    return "integrations";
  }

  if (
    hasAny(values, [
      "интерфейс",
      "карточ",
      "поле",
      "тег",
      "подсвет",
      "поиск",
      "лента",
      "shift",
      "группиров",
      "подсказ",
    ])
  ) {
    return "interface";
  }

  if (
    hasAny(values, [
      "продаж",
      "сделк",
      "ворон",
      "лид",
      "ltv",
      "календар",
    ])
  ) {
    return "sales";
  }

  return "data";
}

function toCompactDescription(value: string, maxLength = 120) {
  if (value.length <= maxLength) {
    return value;
  }

  const trimmed = value.slice(0, maxLength);
  const withWordBoundary = trimmed.slice(0, Math.max(trimmed.lastIndexOf(" "), 0));
  return `${withWordBoundary.trimEnd()}...`;
}

function formatPriceLabel(
  widgetKey: string,
  priceLabelsByKey?: Record<string, string>
) {
  const actualLabel = priceLabelsByKey?.[widgetKey];
  if (actualLabel) {
    return actualLabel;
  }

  return FREE_WIDGET_KEYS.has(widgetKey) ? PRICE_FREE_LABEL : PRICE_FROM_LABEL;
}

type WidgetsListShortProps = {
  priceLabelsByKey?: Record<string, string>;
};

export function WidgetsListShort({ priceLabelsByKey }: WidgetsListShortProps) {
  const widgets = SHORT_WIDGET_KEYS.map((key) =>
    WIDGETS_LIST.find((widget) => widget.key === key)
  ).filter(
    (widget): widget is (typeof WIDGETS_LIST)[number] => Boolean(widget)
  );

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {widgets.map((widget, index) => {
          const category = resolveCategory(
            widget.tags,
            widget.aliases ?? [],
            widget.key,
            widget.title,
            widget.seoTitle
          );
          const priceLabel = formatPriceLabel(widget.key, priceLabelsByKey);

          return (
            <ScrollReveal
              key={widget.key}
              variant="lift"
              yFrom={14}
              durationMs={520}
              delayMs={Math.min(index * 30, 220)}
              amount={0.25}
              className="h-full"
            >
              <WidgetsCatalogCard
                widgetKey={widget.key}
                link={widget.route}
                text={toCompactDescription(widget.description)}
                title={widget.title}
                category={category}
                priceLabel={priceLabel}
              />
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/widgets"
          className="inline-flex items-center justify-center rounded-full bg-[#3F5FEA] px-8 py-4 text-[16px] font-semibold leading-none text-white transition-colors hover:bg-[#3554D6] sm:text-[18px]"
        >
          Посмотреть все виджеты
        </Link>
      </div>
    </div>
  );
}
