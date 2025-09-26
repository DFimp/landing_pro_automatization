"use client"

import Image from "next/image";
import HeaderNav from "@/widgets/header/ui/HeaderNav";
import Button from "@/shared/ui/button/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";
import { userAgent } from "next/server";

import MobileMenu from "./ui/MobileMenu";
import {detectMobile} from '@/shared/utils/detectMobile'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isIframe } = hiddenInIframe();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { isMobileView } = detectMobile()

  return !isMobileView ? (
    <header id={isIframe ? "hidden-in-iframe" : ""}>
      <div className="header__container container flex justify-between items-center">
        <div className="header__logo">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/logoAndText.png"
              alt="Про автоматизацию"
              width={260}
              height={80}
            />
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <HeaderNav />

          <div className="flex-shrink-0"> 
            <Button className="text-h8 font-medium" text="КОНСУЛЬТАЦИЯ" onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  ) : (
    <header className="sticky z-100 top-0 bg-white px-4 py-4 flex justify-between align-center" id={isIframe ? "hidden-in-iframe" : ""}>
      <Link href="/">
            <Image
              className="cursor-pointer"
              src="/logoAndText.png"
              alt="Про автоматизацию"
              width={195}
              height={60}
            />
          </Link>
      <button className="" onClick={() => setIsMobileMenuOpen(true)}>
                          <Image
                              src="/menu.svg"
                              alt="Кнопка"
                              width={20}
                              height={20}
                          />
                      </button>
                      <MobileMenu setConsultationModalIsOpen={setIsModalOpen} isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen}></MobileMenu>
    <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
