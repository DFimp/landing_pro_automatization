import Link from "next/link";
import Image from "next/image";

const links = [
    { name: "Управление сделками", link: "/" },
    { name: "Автоматизация продаж", link: "/" },
    { name: "Интеграции", link: "/" },
    { name: "Документооборот", link: "/" },
    { name: "CRM-платформа для общения с клиентами", link: "/" },
    { name: "Управление контактами и клиентами", link: "/" },
    { name: "Продвинутые отчёты и аналитика", link: "/" },
    { name: "Обратная связь и поддержка", link: "/" },
];

export default function FeaturesList() {
    return (
        <ul className="grid grid-cols-2 gap-4 mt-30">
            {links.map((link) => (
                    <li key={link.name} className="bg-[#D8E3FD] rounded-full">
                <Link className="flex justify-between items-center px-7.5 py-5" href={link.link}>
                    {link.name}
                    <Image src="/cross.svg" alt="Перейти" width={30} height={30} />
    </Link>
    </li>
))}
    </ul>
);
}
