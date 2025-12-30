"use client";

import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ConsultationModal from "@/features/consultation/ConsultationModal";

const MobileMenuWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(true)}>
        <Image src="/decor/menu.svg" alt="кнопка" width={20} height={20} />
      </button>
      
      <MobileMenu
        setConsultationModalIsOpen={setIsModalOpen}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
      
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MobileMenuWrapper;