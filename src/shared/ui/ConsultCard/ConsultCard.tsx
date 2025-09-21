"use client";

import Button from "@/shared/ui/button/Button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import "./ConsultCard.css";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import { isMobile } from "@/shared/utils/isMobile";

interface ConsultCardProps {
  className?: string;
}

const ConsultCard: React.FC<ConsultCardProps> = ({ className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [inView, controls]);

  return !isMobile() ? (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1.5, ease: "easeOut" }}
      id="card"
    >
      <div className={`card__container container rounded-4xl relative ${className || ""}`}>
        <div className="card__content p-10 space-y-15 rounded-4xl">
          <h2 className="text-h2 font-semibold text-white w-190">
            Освободим ваше время, за счет автоматизации процессов и аналитики
          </h2>

          <p className="text-h5 font-medium text-white max-w-150">
            Возьмем на себя рутину, проконтролируем менеджеров и предоставим
            отчеты для стратегических решений
          </p>

          <div className="btn__container mt-4 w-70">
            <Button
              text="КОНСУЛЬТАЦИЯ"
              variant={"outline"}
              onClick={() => setIsModalOpen(true)}
              className="px-7"
            />
          </div>
        </div>

        {/* Фоновые телефоны */}
        <Image
          className="absolute bottom-[-50px] right-[-45px] z-3"
          src="/phoneBigbg.svg"
          alt="card phone"
          width={218}
          height={318}
        />
        <Image
          className="absolute bottom-[-40px] right-[-38px] z-4"
          src="/phoneBig.svg"
          alt="card phone"
          width={205}
          height={296}
        />
        <Image
          className="absolute bottom-0 right-[92px] z-2"
          src="/phoneMedium.svg"
          alt="card phone"
          width={206}
          height={222}
        />
        <Image
          className="absolute w-[192px] h-[213px] bottom-[-35px] right-[250px] z-1"
          src="/phoneSmall.png"
          alt="card phone"
          width={192}
          height={179}
        />

        <ConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </motion.section>
  )
  : (
<div className="relative bg-[#3760E7] bg-cover bg-center min-h-[510px] py-[24px] px-5">
  <Image
          className="absolute right-0 z-2 -top-[1px]"
          src="/Exclude.svg"
          alt="card phone"
          width={133}
          height={201}
        />
    <p className="mb-2 leading-5 text-white font-semibold w-[246px] text-[16px]">
      Освободим ваше время,<br/>за счет автоматизации процессов и аналитики  
    </p>
    <p className="text-white text-[14px]">
      Возьмем на себя рутину, <br/> проконтролируем менеджеров и <br/> предоставим
      отчеты для стратегических <br/> решений
    </p>
    <div className="flex justify-center mt-6 h-[280px]">
      <Image
          className="absolute -translate-x-[100px] translate-y-[20px]"
          src="/phoneMobile_1.svg"
          alt="card phone"
          width={123}
          height={178}
        />
        <Image
          className="absolute "
          src="/phoneMobile_2.svg"
          alt="card phone"
          width={123}
          height={178}
        />
        <Image
          className="absolute translate-x-[100px] -translate-y-[20px]"
          src="/phoneMobile_3.svg"
          alt="card phone"
          width={123}
          height={178}
        />

        <Button
              text="КОНСУЛЬТАЦИЯ"
              variant={"outline"}
              onClick={() => setIsModalOpen(true)}
              className="mt-auto"
              fullWidth={true}
            />
    </div>
    <ConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
</div>
  );
};

export default ConsultCard;
