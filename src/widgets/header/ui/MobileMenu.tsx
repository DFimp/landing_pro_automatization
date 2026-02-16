import Link from "next/link";
import styles from "../styles/MobileMenu.module.scss";

interface MobileMenuProps {
  setConsultationModalIsOpen: (open: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ServicesItems = [
  { name: "АУДИТ", link: "/audit" },
  { name: "ВНЕДРЕНИЕ С НУЛЯ", link: "/" },
  { name: "СОПРОВОЖДЕНИЕ", link: "/accompaniment" },
  { name: "ЛИЦЕНЗИЯ", link: "/license" },
//   { name: "КЕЙСЫ", link: "/cases" },
  { name: "ВИДЖЕТЫ", link: "/widgets" },
  { name: "СТАТЬИ", link: "/articles" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
  setConsultationModalIsOpen,
}) => {
  return (
    <div
      className={`${styles.root} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Закрыть меню"
        onClick={() => setIsOpen(false)}
        tabIndex={isOpen ? 0 : -1}
      />

      <nav className={`${styles.panel} flex flex-col`} aria-label="Мобильное меню">
        <ul className="px-8 pt-10 flex flex-col gap-[40px] flex-1 overflow-y-auto pb-10">
          {ServicesItems.map((link, index) => (
            <li key={index} className="text-[18px] uppercase">
              <Link href={link.link} className="" onNavigate={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li key={-1} className="text-[18px] uppercase">
            <p
              className=""
              onClick={() => {
                setIsOpen(false);
                setConsultationModalIsOpen(true);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsOpen(false);
                  setConsultationModalIsOpen(true);
                }
              }}
            >
              КОНСУЛЬТАЦИЯ
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
