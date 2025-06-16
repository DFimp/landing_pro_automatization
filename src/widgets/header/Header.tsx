"use client"

import Image from "next/image";
import HeaderNav from "@/widgets/header/ui/HeaderNav";
import Button from "@/shared/ui/button/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import styles from "./style.module.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isIframe, setIsIframe] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsIframe(window.self !== window.top);
    } catch (e) {
      setIsIframe(true);
    }
  }, []);

  return (
    <header id="header" className={isIframe ? styles.hidden : ""}>
      <div className="header__container container flex justify-between items-center">
        <div className="header__logo">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/logo.svg"
              alt="Логотип комании"
              width={260}
              height={80}
            />
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <HeaderNav />

          <div className="w-40">
            <Button className="text-h8 font-medium" text="КОНСУЛЬТАЦИЯ" onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
