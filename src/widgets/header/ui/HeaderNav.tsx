"use client";

import { useState } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import clsx from "clsx";
import { navFlip } from "./navFlipClasses";

const ServicesItems = [
  { name: "АУДИТ", link: "/audit" },
  { name: "ВНЕДРЕНИЕ С НУЛЯ", link: "/" },
  { name: "СОПРОВОЖДЕНИЕ", link: "/accompaniment" },
];

const HeaderNav = ({ isFloating = false }: { isFloating?: boolean }) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <nav>
      <ul
        className={clsx(
          "flex justify-between gap-5 py-4 transition-colors duration-200",
          isFloating ? "bg-transparent" : "bg-white"
        )}
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
            className={clsx(
              "font-medium text-h8 transition-colors duration-300",
              navFlip.link
            )}
          >
            <span className={navFlip.inner}>
              <span className={navFlip.front}>ЛИЦЕНЗИЯ</span>
              <span className={navFlip.top} aria-hidden="true">
                ЛИЦЕНЗИЯ
              </span>
            </span>
          </Link>
        </li>{/*
        <li>
          <Link
            href="/cases"
            className="font-medium text-h8 hover:text-blue transition-colors duration-300"
          >
            КЕЙСЫ
          </Link>
        </li>
        */}

        <li>
          <Link
            href="/widgets"
            className={clsx(
              "font-medium text-h8 transition-colors duration-300",
              navFlip.link
            )}
          >
            <span className={navFlip.inner}>
              <span className={navFlip.front}>ВИДЖЕТЫ</span>
              <span className={navFlip.top} aria-hidden="true">
                ВИДЖЕТЫ
              </span>
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/articles"
            className={clsx(
              "font-medium text-h8 transition-colors duration-300",
              navFlip.link
            )}
          >
            <span className={navFlip.inner}>
              <span className={navFlip.front}>СТАТЬИ</span>
              <span className={navFlip.top} aria-hidden="true">
                СТАТЬИ
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
