import type { ReactNode } from "react";
import ScrollToInstructionLink from "@/sections/landing/scrollToInstructionLink/ScrollToInstructionLink";
import WidgetHeroSection from "./WidgetHeroSection";
import WidgetInstallButton from "./WidgetInstallButton";

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
  children?: ReactNode;
};

const DEFAULT_TITLE_CLASS =
  "mt-10 font-semibold text-white text-[clamp(36px,6vw,64px)] leading-[1.05] max-[480px]:mt-5 max-[480px]:text-[clamp(26px,8.5vw,34px)] max-[480px]:leading-[1.12]";
const DEFAULT_DESCRIPTION_CLASS =
  "mt-[18px] max-w-[920px] text-[#cfd6ea] text-[clamp(16px,1.6vw,20px)] leading-[1.6] max-[480px]:mt-[14px] max-[480px]:max-w-none max-[480px]:text-[14.5px] max-[480px]:leading-[1.55] max-[480px]:text-[#e3e8ff]";
const DEFAULT_ACTIONS_CLASS =
  "mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 max-[480px]:grid max-[480px]:grid-cols-1 max-[480px]:gap-3 max-[480px]:mb-0";

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
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
  children,
}: WidgetHeroContentProps) {
  const hasActions = installHref || showInstructionLink || extraActions;

  return (
    <WidgetHeroSection
      className={sectionClassName}
      containerClassName={containerClassName}
    >
      {badge}
      <h2 className={cn(DEFAULT_TITLE_CLASS, titleClassName)}>{title}</h2>
      <p className={cn(DEFAULT_DESCRIPTION_CLASS, descriptionClassName)}>
        {description}
      </p>
      {hasActions ? (
        <div className={cn(DEFAULT_ACTIONS_CLASS, actionsClassName)}>
          {installHref ? (
            <WidgetInstallButton
              href={installHref}
              className={installButtonClassName}
            >
              {installLabel}
            </WidgetInstallButton>
          ) : null}
          {showInstructionLink ? <ScrollToInstructionLink /> : null}
          {extraActions}
        </div>
      ) : null}
      {children}
    </WidgetHeroSection>
  );
}
