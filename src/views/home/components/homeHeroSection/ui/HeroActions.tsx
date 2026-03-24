"use client";

import Button from "@/shared/ui/button/Button";
import { useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";

type HeroActionsProps = {
  text?: string;
  className?: string;
};

const HeroActions = ({
  text = "КОНСУЛЬТАЦИЯ",
  className,
}: HeroActionsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        text={text}
        variant="secondary"
        onClick={() => setIsModalOpen(true)}
        className={className}
      />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroActions;
