import type { ReactNode } from "react";

type WidgetInstallButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

const DEFAULT_BUTTON_CLASS =
  "inline-flex items-center justify-center h-11 px-8 bg-[#386bff] text-white rounded-full font-semibold text-[16px] shadow-[0_8px_24px_rgba(56,107,255,0.35)] transition-[transform,box-shadow,background] duration-200 hover:bg-[#2f5cf0] hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(56,107,255,0.4)] max-[480px]:w-full max-[480px]:text-[15px]";

export default function WidgetInstallButton({
  href,
  children = "Установить виджет",
  className,
}: WidgetInstallButtonProps) {
  return (
    <a
      className={[DEFAULT_BUTTON_CLASS, className].filter(Boolean).join(" ")}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  );
}
