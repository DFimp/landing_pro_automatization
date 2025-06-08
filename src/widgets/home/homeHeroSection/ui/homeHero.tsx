"use client";

import Button from "@/shared/ui/button/Button";
import Image from "next/image";
import { useState } from "react";
import ConsultationModal from "@/features/consultation/ConsultationModal";

const HomeHero = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section className="hero">
      <div className="hero__container container flex justify-between items-center">
        <div className="space-y-9">
          <h2 className="text-h3 font-semibold">Ваш эксперт по amoCRM</h2>

          <h2 className="text-h4 font-normal max-w-[506px]">
            от консультации в решении простых задач до полной автоматизации
            бизнес-процессов.
          </h2>
          <div className="w-90">
            <Button text="КОНСУЛЬТАЦИЯ" variant="secondary" onClick={() => setIsModalOpen(true)} />
          </div>
        </div>

        <Image src="/laptop.svg" alt="Laptop" width={580} height={464} />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default HomeHero;
