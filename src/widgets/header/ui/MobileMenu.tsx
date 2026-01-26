import Link from "next/link";
import Image from "next/image";

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
  { name: "КЕЙСЫ", link: "/cases" },
  { name: "ВИДЖЕТЫ", link: "/widgets" },
  { name: "СТАТЬИ", link: "/articles" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
  setConsultationModalIsOpen,
}) => {
  return (
    isOpen && (
      <div className="absolute left-0 top-0 right-0 w-full h-screen bg-white">
        <div className="px-8 py-4 flex justify-end h-[92px]">
          <button className="" onClick={() => setIsOpen(false)}>
            <Image src="/decor/close.svg" alt="кнопка" width={20} height={20} />
          </button>
        </div>
        <ul className="px-8 flex flex-col gap-[40px]">
          {ServicesItems.map((link, index) => (
            <li key={index} className="text-[18px] uppercase">
              {link.link === "/cases" ? (
                <span className="text-black/40 cursor-not-allowed select-none">
                  {link.name}
                </span>
              ) : (
                <Link
                  href={link.link}
                  className=""
                  onNavigate={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li key={-1} className="text-[18px] uppercase">
            <p
              className=""
              onClick={() => {
                setIsOpen(false);
                setConsultationModalIsOpen(true);
              }}
            >
              КОНСУЛЬТАЦИЯ
            </p>
          </li>
        </ul>
      </div>
    )
  );
};

export default MobileMenu;
