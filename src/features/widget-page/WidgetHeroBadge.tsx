import type { ReactNode } from "react";

type WidgetHeroBadgeProps = {
  children: ReactNode;
  className?: string;
};

const DEFAULT_BADGE_CLASS =
  "at-pill at-bleed-left inline-flex items-center gap-2 px-[18px] py-[10px] text-[14px] leading-none bg-[#2847ff] text-[#dfe7ff] rounded-full max-[480px]:box-border max-[480px]:justify-center max-[480px]:px-4 max-[480px]:py-[12px] max-[480px]:text-[12px]";

export default function WidgetHeroBadge({ children, className }: WidgetHeroBadgeProps) {
  return (
    <h1
      className={[DEFAULT_BADGE_CLASS, className].filter(Boolean).join(" ")}
      style={{
        marginLeft: "calc(50% - 50vw)",
        paddingLeft: "calc(49.5vw - 50% + 16px)",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
    >
      {children}
    </h1>
  );
}

