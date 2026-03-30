import type { ReactNode } from "react";
import WidgetHeroSection from "./WidgetHeroSection";
import WidgetHeroActions from "./WidgetHeroActions";
import WidgetTariffs from "./WidgetTariffs.client";

type WidgetHeroContentProps = {
  badge?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  actionsClassName?: string;
  installHref?: string;
  installLabel?: ReactNode;
  installButtonClassName?: string;
  showInstructionLink?: boolean;
  extraActions?: ReactNode;
  widgetId?: string;
  children?: ReactNode;
};

const DEFAULT_TITLE_CLASS =
  "mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]";
const DEFAULT_DESCRIPTION_CLASS =
  "text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]";
const DEFAULT_DESCRIPTION_ROW_CLASS =
  "mt-[18px] flex flex-col gap-6 min-[901px]:flex-row min-[901px]:items-start min-[901px]:justify-between min-[901px]:gap-8 max-[480px]:mt-[14px]";

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function resolveWidgetId(widgetId?: string, installHref?: string) {
  if (widgetId) {
    return widgetId;
  }

  if (!installHref) {
    return undefined;
  }

  try {
    return new URL(installHref).searchParams.get("client_id") ?? undefined;
  } catch {
    const matched = installHref.match(/[?&]client_id=([^&]+)/);
    return matched?.[1];
  }
}

export default function WidgetHeroContent({
  badge,
  title,
  description,
  sectionClassName,
  containerClassName,
  titleClassName,
  descriptionClassName,
  actionsClassName,
  installHref,
  installLabel,
  installButtonClassName,
  showInstructionLink = true,
  extraActions,
  widgetId,
  children,
}: WidgetHeroContentProps) {
  const hasActions = installHref || showInstructionLink || extraActions;
  const resolvedWidgetId = resolveWidgetId(widgetId, installHref);

  return (
    <WidgetHeroSection
      className={sectionClassName}
      containerClassName={containerClassName}
    >
      {badge}
      <h2 className={cn(DEFAULT_TITLE_CLASS, titleClassName)}>{title}</h2>
      <div className={DEFAULT_DESCRIPTION_ROW_CLASS}>
        <div className="min-[901px]:min-w-0 min-[901px]:flex-1">
          <p className={cn("max-w-[920px] min-[901px]:max-w-none", DEFAULT_DESCRIPTION_CLASS, descriptionClassName)}>
            {description}
          </p>
          {hasActions ? (
            <WidgetHeroActions
              installHref={installHref}
              installLabel={installLabel}
              installButtonClassName={installButtonClassName}
              showInstructionLink={showInstructionLink}
              extraActions={extraActions}
              widgetId={widgetId}
              className={actionsClassName}
            />
          ) : null}
        </div>
        {resolvedWidgetId ? <WidgetTariffs widgetId={resolvedWidgetId} /> : null}
      </div>
      {children}
    </WidgetHeroSection>
  );
}
