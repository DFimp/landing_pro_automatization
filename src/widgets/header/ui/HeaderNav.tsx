"use client";

import { useState } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const ServicesItems = [
  { name: "АУДИТ", link: "/audit" },
  { name: "ВНЕДРЕНИЕ С НУЛЯ", link: "/" },
  { name: "СОПРОВОЖДЕНИЕ", link: "/accompaniment" },
];

const HeaderNav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <nav>
      <ul
        className="flex justify-between gap-5 bg-white py-4"
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <DropdownMenu
          title="УСЛУГИ"
          items={ServicesItems}
          isOpen={isDropdownOpen}
          setIsOpen={setDropdownOpen}
        />

        <li>
          <Link
            href="/license"
            className="font-medium text-h8 hover:text-blue transition-colors duration-300"
          >
            ЛИЦЕНЗИЯ
          </Link>
        </li>

        <li>
          <Link
            href="/cases"
            className="font-medium text-h8 hover:text-blue transition-colors duration-300"
          >
            КЕЙСЫ
          </Link>
        </li>

        <li>
          <Link
            href="/widgets"
            className="font-medium text-h8 hover:text-blue transition-colors duration-300"
          >
            ВИДЖЕТЫ
          </Link>
        </li>

        <li>
          <Link href="/articles" className="font-medium text-h8 hover:text-blue transition-colors">
            СТАТЬИ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
