import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import { lockBodyScroll } from "@/shared/utils/lockBodyScroll";

type MobileMenuWrapperProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenuWrapper = ({ isOpen, setIsOpen }: MobileMenuWrapperProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    return lockBodyScroll();
  }, [isOpen]);

  return (
    <>
      <MobileMenu
        setConsultationModalIsOpen={setIsModalOpen}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MobileMenuWrapper;
