import Link from "next/link";
import Image from "next/image";

interface MenuItem {
    name: string;
    link: string;
}

interface MobileMenuProps {
    setConsultationModalIsOpen: (open: boolean) =>void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const ServicesItems = [
    { name: "ПОЛЬЗА ДЛЯ БИЗНЕСА", link: "/" },
    { name: "АУДИТ", link: "/audit" },
    { name: "ВНЕДРЕНИЕ С НУЛЯ", link: "/integration" },
    { name: "СОПРОВОЖДЕНИЕ", link: "/accompaniment" },
    { name: "ВИДЖЕТЫ", link: "/widgets" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, setIsOpen, setConsultationModalIsOpen }) => {
    return isOpen && (
        <div className="absolute left-0 top-0 right-0 w-full h-screen bg-white">
        <div className="px-8 py-4 flex justify-end h-[92px]">
            <button className="" onClick={() => setIsOpen(false)}>
                                      <Image
                                          src="/close.svg"
                                          alt="Кнопка"
                                          width={20}
                                          height={20}

                                      />
                                  </button></div>
                                  <ul className="px-8 flex flex-col gap-[40px]">
                                    { ServicesItems.map((link) => (<li className="text-[18px] uppercase">
                                        <Link
                                    href={link.link}
                                    className=""
                                    onNavigate={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                    </li>))}
                                    <li className="text-[18px] uppercase">
                                        <p
                                    className=""
                                    onClick={() => {setIsOpen(false); setConsultationModalIsOpen(true)}}
                                >
                                    КОНСУЛЬТАЦИЯ 
                                </p>
                                    </li>
                                    
                                    </ul>  
        </div>
    );
};

export default MobileMenu;