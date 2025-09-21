"use client";

import Button from "@/shared/ui/button/Button";
import Image from "next/image";
import { useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import { isMobile } from "@/shared/utils/isMobile";

const HomeHero = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section className="hero">
      <div className="hero__container container sm:flex justify-between items-center">
        <div className="space-y-9">
          <h2 className="sm:text-h3 text-2xl font-semibold">Ваш эксперт по amoCRM</h2>

          <h2 className="sm:text-h4 text-lg font-normal max-w-[506px]">
            от консультации в решении простых задач до полной автоматизации
            бизнес-процессов.
          </h2>
          <div className="w-90">
            { !isMobile() && <Button text="КОНСУЛЬТАЦИЯ" variant="secondary" onClick={() => setIsModalOpen(true)} />}
          </div>
        </div>

        <Image className="ml-auto" src="/laptop.png" alt="Laptop" width={isMobile() ? 195 : 580} height={isMobile() ? 161 : 464} />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default HomeHero;
