"use client";

import Button from "@/shared/ui/button/Button";
import { useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";

const HeroActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        text="КОНСУЛЬТАЦИЯ"
        variant="secondary"
        onClick={() => setIsModalOpen(true)}
      />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroActions;
