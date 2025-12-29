"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/shared/ui/button/Button";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import "./ConsultCard.css";

interface ConsultCardProps {
  className?: string;
}

const ConsultCard: React.FC<ConsultCardProps> = ({ className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (inView) controls.start({ opacity: 1 });
  }, [inView, controls]);

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.5, ease: "easeOut" }}
        id="card"
        className="hidden md:block"
      >
        <div
          className={`card__container container rounded-4xl relative ${className || ""}`}
        >
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
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="px-7"
              />
            </div>
          </div>

          <Image
            className="absolute bottom-[-50px] right-[-45px] z-3"
            src="/decor/phoneBigbg.svg"
            alt="card phone"
            width={218}
            height={318}
          />
          <Image
            className="absolute bottom-[-40px] right-[-38px] z-4"
            src="/decor/phoneBig.svg"
            alt="card phone"
            width={205}
            height={296}
          />
          <Image
            className="absolute bottom-0 right-[92px] z-2"
            src="/decor/phoneMedium.svg"
            alt="card phone"
            width={206}
            height={222}
          />
          <Image
            className="absolute w-[192px] h-[213px] bottom-[-35px] right-[250px] z-1"
            src="/decor/phoneSmall.webp"
            alt="card phone"
            width={192}
            height={179}
          />
        </div>
      </motion.section>

      <section className="md:hidden">
        <div className="tg-consult-mobile">
          <Image
            className="tg-consult-mobile__rays"
            src="/decor/Exclude.svg"
            alt="exclude"
            width={133}
            height={201}
            priority
          />

          <h3 className="tg-consult-mobile__title">
            Освободим ваше время,
            <br /> за счет автоматизации процессов и аналитики
          </h3>

          <p className="tg-consult-mobile__text">
            Возьмем на себя рутину, проконтролируем менеджеров и предоставим
            отчеты для стратегических решений
          </p>

          <div className="tg-consult-mobile__phones" aria-hidden>
            <Image
              className="tg-consult-mobile__phone tg-consult-mobile__phone--left"
              src="/decor/phoneMobile_1.svg"
              alt="phoneMobile_1"
              width={123}
              height={178}
            />
            <Image
              className="tg-consult-mobile__phone tg-consult-mobile__phone--center"
              src="/decor/phoneMobile_2.svg"
              alt="phoneMobile_2"
              width={123}
              height={178}
            />
            <Image
              className="tg-consult-mobile__phone tg-consult-mobile__phone--right"
              src="/decor/phoneMobile_3.svg"
              alt="phoneMobile_3"
              width={123}
              height={178}
            />
          </div>

          <Button
            text="КОНСУЛЬТАЦИЯ"
            onClick={() => setIsModalOpen(true)}
            className="tg-consult-mobile__btn"
            fullWidth
          />
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ConsultCard;
