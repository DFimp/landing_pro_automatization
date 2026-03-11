type MobileMenuToggleProps = {
  isOpen: boolean;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
};

export default function MobileMenuToggle({
  isOpen,
  onClick,
  ariaLabel,
  className,
}: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center border-0 bg-transparent p-0 [-webkit-tap-highlight-color:transparent] ${
        className ?? ""
      }`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className="relative h-5 w-5">
        <span
          className={`absolute left-[2px] right-[2px] top-[5px] block h-[2px] origin-center rounded-full bg-slate-900 transition-[transform,opacity] duration-200 ease-in-out motion-reduce:transition-none ${
            isOpen ? "translate-y-[4px] rotate-45" : ""
          }`}
        />
        <span
          className={`absolute left-[2px] right-[2px] top-[9px] block h-[2px] origin-center rounded-full bg-slate-900 transition-[transform,opacity] duration-200 ease-in-out motion-reduce:transition-none ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute left-[2px] right-[2px] top-[13px] block h-[2px] origin-center rounded-full bg-slate-900 transition-[transform,opacity] duration-200 ease-in-out motion-reduce:transition-none ${
            isOpen ? "-translate-y-[4px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}
