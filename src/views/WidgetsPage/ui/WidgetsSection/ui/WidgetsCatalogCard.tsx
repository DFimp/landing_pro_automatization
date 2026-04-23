import clsx from "clsx";
import Link from "next/link";

export type WidgetCategory =
  | "social"
  | "tasks"
  | "duplicates"
  | "sales"
  | "interface"
  | "control"
  | "integrations"
  | "data";

export const CATEGORY_LABELS: Record<WidgetCategory, string> = {
  social: "\u0421\u043e\u0446 \u0441\u0435\u0442\u0438",
  tasks: "\u0417\u0430\u0434\u0430\u0447\u0438",
  duplicates: "\u0414\u0443\u0431\u043b\u0438",
  sales: "\u041f\u0440\u043e\u0434\u0430\u0436\u0438",
  interface: "\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",
  control: "\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c",
  integrations: "\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
  data: "\u0414\u0430\u043d\u043d\u044b\u0435",
};

type WidgetsCatalogCardProps = {
  widgetKey: string;
  title: string;
  text: string;
  link: string;
  category: WidgetCategory;
  priceLabel: string;
};

type WidgetIconType =
  | "telegram"
  | "whatsapp"
  | "distribution"
  | "duplicate"
  | "duplicateContacts"
  | "document"
  | "sheet"
  | "bank"
  | "paymentCheck"
  | "calendar"
  | "timezone"
  | "tasks"
  | "massLeads"
  | "ban"
  | "select"
  | "groupFields"
  | "transfer"
  | "copy"
  | "noteLock"
  | "feed"
  | "hide"
  | "palette"
  | "search"
  | "related"
  | "hint"
  | "textAi"
  | "ltv";

function resolveWidgetIconType(widgetKey: string): WidgetIconType {
  const normalizedKey = widgetKey.toLowerCase();

  if (normalizedKey.includes("telegram")) {
    return "telegram";
  }

  if (normalizedKey.includes("whatsapp")) {
    return "whatsapp";
  }

  switch (normalizedKey) {
    case "telegram-notify":
    case "telegram-button":
      return "telegram";
    case "whatsapp-button":
      return "whatsapp";
    case "lead-distribution":
      return "distribution";
    case "duplicate-leads":
      return "duplicate";
    case "duplicate-contacts":
      return "duplicateContacts";
    case "docs-flow":
    case "google-docs":
      return "document";
    case "google-sheets":
      return "sheet";
    case "t-bank":
      return "bank";
    case "tbank-check-pay":
      return "paymentCheck";
    case "meet-calendar":
      return "calendar";
    case "time-zone":
      return "timezone";
    case "auto-tasks":
      return "tasks";
    case "massive-leads":
      return "massLeads";
    case "closing-ban":
    case "delete-tasks-ban":
      return "ban";
    case "shift-select":
      return "select";
    case "group-fields":
      return "groupFields";
    case "transfer-fields":
      return "transfer";
    case "copying-fields":
      return "copy";
    case "delete-notes-ban":
      return "noteLock";
    case "setting-feed":
      return "feed";
    case "hiding-data":
      return "hide";
    case "color-leads":
    case "color-fields":
    case "color-tags":
      return "palette";
    case "search-fields":
      return "search";
    case "other-leads":
      return "related";
    case "field-hints":
      return "hint";
    case "text-rewrite":
      return "textAi";
    case "ltv-client":
      return "ltv";
    default:
      return "tasks";
  }
}

function IconPath({ type }: { type: WidgetIconType }) {
  const c = "currentColor";
  const common = {
    stroke: c,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "telegram":
      return (
        <>
          <path d="m20 4-2.8 14.2-4.6-3.3-2.5 2.3.4-3.7L4 10.9 20 4Z" {...common} />
          <path d="m10.5 13.5 6.7-6.6" {...common} />
        </>
      );
    case "whatsapp":
      return (
        <>
          <path d="M12 20a8 8 0 1 0-4.8-1.6L4 20l1.8-3.2A8 8 0 0 0 12 20Z" {...common} />
          <path d="M9 8.8c.4 2.4 2.1 4.3 4.4 5" {...common} />
          <path d="M14 13.8c-.8.7-1.9.5-3-.3-1-.7-1.8-1.7-2.2-2.9-.4-1.2-.2-2.3.6-3" {...common} />
        </>
      );
    case "distribution":
      return (
        <>
          <path d="M12 5v14M12 10l-6-5M12 10l6-5M12 14l-6 5M12 14l6 5" {...common} />
          <circle cx="12" cy="12" r="2.2" {...common} />
        </>
      );
    case "duplicate":
      return (
        <>
          <rect x="4" y="7" width="10" height="10" rx="2" {...common} />
          <rect x="10" y="3" width="10" height="10" rx="2" {...common} />
        </>
      );
    case "duplicateContacts":
      return (
        <>
          <circle cx="9" cy="9" r="2.5" {...common} />
          <path d="M5.8 14c.8-1.5 2-2.2 3.2-2.2s2.4.7 3.2 2.2" {...common} />
          <circle cx="15.5" cy="8.5" r="2.3" {...common} />
          <path d="M12.6 13.2c.7-1.3 1.8-2 2.9-2 1.1 0 2.2.7 2.9 2" {...common} />
        </>
      );
    case "document":
      return (
        <>
          <path d="M8 3h6l4 4v14H8V3Z" {...common} />
          <path d="M14 3v5h4M11 12h4M11 16h4" {...common} />
        </>
      );
    case "sheet":
      return (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2.5" {...common} />
          <path d="M4 9h16M4 14h16M9 4v16M14 4v16" {...common} />
        </>
      );
    case "bank":
      return (
        <>
          <path d="M3.5 9h17L12 4 3.5 9ZM5 9v8M9 9v8M15 9v8M19 9v8M3 19h18" {...common} />
        </>
      );
    case "paymentCheck":
      return (
        <>
          <rect x="3.5" y="5" width="17" height="14" rx="2.5" {...common} />
          <path d="M3.5 10h17M9.5 15.5l2 2 3.8-3.8" {...common} />
        </>
      );
    case "calendar":
      return (
        <>
          <rect x="3.5" y="5" width="17" height="15" rx="3" {...common} />
          <path d="M8 3v4M16 3v4M3.5 10h17" {...common} />
          <circle cx="12" cy="14.5" r="2.5" {...common} />
        </>
      );
    case "timezone":
      return (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M12 8v4l3 2M4.5 12h15" {...common} />
        </>
      );
    case "tasks":
      return (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" {...common} />
          <path d="m8 12 2.4 2.4L16 9" {...common} />
        </>
      );
    case "massLeads":
      return (
        <>
          <circle cx="8" cy="9" r="2" {...common} />
          <circle cx="16" cy="9" r="2" {...common} />
          <path d="M5 15c.7-1.4 1.8-2 3-2s2.3.6 3 2M13 15c.7-1.4 1.8-2 3-2s2.3.6 3 2M12 5v5M9.5 7.5H14.5" {...common} />
        </>
      );
    case "ban":
      return (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="m8 8 8 8" {...common} />
        </>
      );
    case "select":
      return (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1.2" {...common} />
          <rect x="14" y="4" width="6" height="6" rx="1.2" {...common} />
          <rect x="4" y="14" width="6" height="6" rx="1.2" {...common} />
          <path d="M14 14h6v6h-6zM10 7h4M7 10v4M10 17h4" {...common} />
        </>
      );
    case "groupFields":
      return (
        <>
          <path d="M5 6h14M5 12h14M5 18h14" {...common} />
          <rect x="5" y="4.5" width="4" height="3" rx="1" {...common} />
          <rect x="11" y="10.5" width="4" height="3" rx="1" {...common} />
          <rect x="15" y="16.5" width="4" height="3" rx="1" {...common} />
        </>
      );
    case "transfer":
      return (
        <>
          <path d="M4 8h13m0 0-3-3m3 3-3 3M20 16H7m0 0 3-3m-3 3 3 3" {...common} />
        </>
      );
    case "copy":
      return (
        <>
          <rect x="8" y="8" width="11" height="11" rx="2" {...common} />
          <rect x="5" y="5" width="11" height="11" rx="2" {...common} />
        </>
      );
    case "noteLock":
      return (
        <>
          <path d="M7 4h10v16H7V4Z" {...common} />
          <path d="M9.5 12h5M9.5 15h3" {...common} />
          <rect x="10" y="6.7" width="4" height="3.5" rx="0.8" {...common} />
          <path d="M10.8 6.7V6a1.2 1.2 0 1 1 2.4 0v.7" {...common} />
        </>
      );
    case "feed":
      return (
        <>
          <path d="M5 7h14M5 12h10M5 17h6" {...common} />
          <circle cx="17.5" cy="12" r="1.8" {...common} />
        </>
      );
    case "hide":
      return (
        <>
          <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" {...common} />
          <circle cx="12" cy="12" r="2.4" {...common} />
          <path d="m5 5 14 14" {...common} />
        </>
      );
    case "palette":
      return (
        <>
          <path d="M12 4a8 8 0 1 0 0 16h1.3a2.2 2.2 0 1 0 0-4.4h-1.1a1.8 1.8 0 0 1 0-3.6H14a2 2 0 0 0 0-4h-2Z" {...common} />
          <circle cx="8" cy="8" r="1" fill={c} />
          <circle cx="6.7" cy="11.2" r="1" fill={c} />
          <circle cx="8.4" cy="14" r="1" fill={c} />
        </>
      );
    case "search":
      return (
        <>
          <circle cx="11" cy="11" r="6.2" {...common} />
          <path d="m16 16 4 4" {...common} />
        </>
      );
    case "related":
      return (
        <>
          <circle cx="6" cy="12" r="2.2" {...common} />
          <circle cx="18" cy="7" r="2.2" {...common} />
          <circle cx="18" cy="17" r="2.2" {...common} />
          <path d="m8 11 7.8-3M8 13l7.8 3" {...common} />
        </>
      );
    case "hint":
      return (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M12 10.5v4M12 8h.01" {...common} />
        </>
      );
    case "textAi":
      return (
        <>
          <path d="M4 6h16M4 12h10M4 18h8" {...common} />
          <path d="m16.5 12 1.2-2.8 1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2Z" {...common} />
        </>
      );
    case "ltv":
      return (
        <>
          <path d="M4 18h16M6.5 14.5 10 11l2.5 2.5L17.5 8" {...common} />
          <circle cx="17.5" cy="8" r="1.5" {...common} />
          <path d="M14 6h4v4" {...common} />
        </>
      );
    default:
      return (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" {...common} />
          <path d="m8 12 2.4 2.4L16 9" {...common} />
        </>
      );
  }
}

function WidgetIcon({ widgetKey }: { widgetKey: string }) {
  const type = resolveWidgetIconType(widgetKey);

  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden>
      <IconPath type={type} />
    </svg>
  );
}

export function WidgetsCatalogCard({
  widgetKey,
  title,
  text,
  link,
  category,
  priceLabel,
}: WidgetsCatalogCardProps) {
  const isFree = priceLabel
    .toLowerCase()
    .includes("\u0431\u0435\u0441\u043f\u043b\u0430\u0442");

  return (
    <Link href={link} className="block h-full">
      <article className="widget-card relative h-full rounded-[22px] border border-[#d9e4ff]">
        <div className="widget-card__inner relative h-full overflow-hidden rounded-[22px] bg-white px-5 py-4">
          {!isFree && (
            <div className="pointer-events-none absolute inset-0 z-20">
              <div className="absolute left-[75%] top-[75%] flex h-[28px] w-[88%] -translate-x-1/2 -translate-y-1/2 -rotate-45 items-center justify-center rounded-none bg-[#ef4444] px-3 text-center text-[10px] font-semibold uppercase leading-none tracking-[0.08em] text-white shadow-[0_8px_18px_rgba(239,68,68,0.45)]">
                {"\u0032 \u043d\u0435\u0434\u0435\u043b\u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"}
              </div>
            </div>
          )}

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#edf2ff] text-[#3760E7]">
                <WidgetIcon widgetKey={widgetKey} />
              </span>
              <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/45">
                {CATEGORY_LABELS[category]}
              </span>
            </div>

            <h3 className="mt-4 text-[22px] font-semibold leading-[1.2] text-[#0f1427]">
              {title}
            </h3>

            <p className="mt-2 text-[14px] leading-[1.5] text-black/62">{text}</p>

            <div className="mt-auto pt-4">
              <div className="flex items-end justify-between gap-4 border-t border-black/8 pt-3">
                <span
                  className={clsx(
                    "text-[22px] font-semibold leading-none",
                    isFree ? "text-[#0f1427]" : "text-[#111a36]"
                  )}
                >
                  {priceLabel}
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3760E7]">
                  {"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10m0 0-4-4m4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
