"use client"

import { useState } from "react";
import Button from "@/shared/ui/button/Button";
import ConsultationModal from "@/features/consultation/ConsultationModal";

export default function HeaderActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex-shrink-0">
        <Button 
          className="text-h8 font-medium" 
          text="КОНСУЛЬТАЦИЯ" 
          onClick={() => setIsModalOpen(true)} 
        />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}