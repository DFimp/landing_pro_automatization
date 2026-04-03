import type { ReactNode } from "react";
import ScrollToInstructionLink from "@/sections/landing/scrollToInstructionLink/ScrollToInstructionLink";
import WidgetInstallButton from "./WidgetInstallButton";

type WidgetHeroActionsProps = {
  installHref?: string;
  installLabel?: ReactNode;
  installButtonClassName?: string;
  showInstructionLink?: boolean;
  extraActions?: ReactNode;
  widgetId?: string;
  className?: string;
};

const DEFAULT_ACTIONS_CLASS =
  "mt-7 w-full max-[900px]:mt-6";

const DEFAULT_LEFT_GROUP_CLASS =
  "flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3";

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function WidgetHeroActions({
  installHref,
  installLabel,
  installButtonClassName,
  showInstructionLink = true,
  extraActions,
  className,
}: WidgetHeroActionsProps) {
  const hasActions =
    Boolean(installHref) ||
    showInstructionLink ||
    Boolean(extraActions);

  if (!hasActions) {
    return null;
  }

  return (
    <div className={cn(DEFAULT_ACTIONS_CLASS, className)}>
      <div className={DEFAULT_LEFT_GROUP_CLASS}>
        {installHref ? (
          <WidgetInstallButton
            href={installHref}
            className={installButtonClassName}
          >
            {installLabel}
          </WidgetInstallButton>
        ) : null}
        {extraActions}
        {showInstructionLink ? <ScrollToInstructionLink /> : null}
      </div>
    </div>
  );
}
