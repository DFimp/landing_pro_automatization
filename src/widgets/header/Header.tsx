"use client"

import Image from "next/image";
import HeaderNav from "@/widgets/header/ui/HeaderNav";
import Button from "@/shared/ui/button/Button";
import Link from "next/link";
import { useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import { hiddenInIframe } from "@/shared/utils/hiddenInIframe";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isIframe } = hiddenInIframe();

  return (
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
