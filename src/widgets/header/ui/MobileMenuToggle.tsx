import styles from "../styles/MobileMenuToggle.module.scss";

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
      className={`${styles.toggle} ${className ?? ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </span>
    </button>
  );
}
