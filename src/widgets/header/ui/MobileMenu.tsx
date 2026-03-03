import type { MouseEvent } from "react";
import Link from "next/link";

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
  const closeMenu = () => setIsOpen(false);
  const handleNavClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    if (target.closest("a, button, [role='button']")) {
      closeMenu();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[1400] flex h-screen h-[100dvh] w-full justify-end overscroll-contain transition-[visibility] duration-0 ${
        isOpen
          ? "visible delay-0 pointer-events-auto"
          : "invisible delay-[420ms] pointer-events-none"
      } motion-reduce:transition-none`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-[#020617]/45 transition-opacity duration-[360ms] motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Закрыть меню"
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
      />

      <nav
        className={`relative z-[1] mt-[calc(var(--header-height,92px)-1px)] h-[calc(100%-var(--header-height,92px)+1px)] w-[80vw] min-w-[260px] max-w-[520px] overflow-hidden rounded-bl-[32px] bg-white transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
        aria-label="Мобильное меню"
        onClick={handleNavClick}
      >
        <ul className="px-8 pt-10 flex flex-col gap-[40px] flex-1 overflow-y-auto pb-10">
          {ServicesItems.map((link, index) => (
            <li key={index} className="text-[18px] uppercase">
              <Link href={link.link} onClick={closeMenu}>
                <span className="block w-full">{link.name}</span>
              </Link>
            </li>
          ))}
          <li key={-1} className="text-[18px] uppercase">
            <p
              className=""
              onClick={() => {
                closeMenu();
                setConsultationModalIsOpen(true);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  closeMenu();
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
