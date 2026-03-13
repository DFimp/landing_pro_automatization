import type { Metadata } from "next";
import { createSEOMetadata } from "@/shared/lib/seo/metadata";
import { WIDGETS, type WidgetKey } from "@/shared/constants/widgets";

const NOINDEX_WIDGET_KEYS = new Set<WidgetKey>(["google-docs", "google-sheets"]);
const TITLE_WIDGET_KEYS = new Set<WidgetKey>(["hiding-data"]);

export const WIDGETS_METADATA: Record<WidgetKey, Metadata> = Object.fromEntries(
  WIDGETS.map((widget) => {
    const key = widget.key as WidgetKey;
    const title = TITLE_WIDGET_KEYS.has(key) ? widget.title : widget.seoTitle;

    const baseMetadata = createSEOMetadata({
      title,
      description: widget.description,
      keywords: widget.keywords,
      canonical: widget.route,
      ogType: "website",
    });

    if (NOINDEX_WIDGET_KEYS.has(key)) {
      return [key, { ...baseMetadata, robots: { index: false, follow: true } }];
    }

    return [key, baseMetadata];
  }),
) as Record<WidgetKey, Metadata>;
