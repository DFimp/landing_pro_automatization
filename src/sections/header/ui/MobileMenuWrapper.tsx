import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import { lockBodyScroll } from "@/shared/utils/lockBodyScroll";

const MENU_TRANSITION_MS = 420;

type MobileMenuWrapperProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenuWrapper = ({ isOpen, setIsOpen }: MobileMenuWrapperProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMenuMounted(true);

      const rafId = window.requestAnimationFrame(() => {
        setIsMenuVisible(true);
      });

      return () => window.cancelAnimationFrame(rafId);
    }

    setIsMenuVisible(false);

    const timeoutId = window.setTimeout(() => {
      setIsMenuMounted(false);
    }, MENU_TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isOpen]);

  useEffect(() => {
    if (!isMenuMounted) {
      return;
    }
    
    return lockBodyScroll();
  }, [isMenuMounted]);

  return (
    <>
      {isMenuMounted && (
        <MobileMenu
          setConsultationModalIsOpen={setIsModalOpen}
          isOpen={isMenuVisible}
          setIsOpen={setIsOpen}
        />
      )}
      
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MobileMenuWrapper;
