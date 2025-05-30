"use client";

import Button from "@/shared/ui/button/Button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./card.css";

const Card = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeOut" }}
            id='card'
        >
            <div className="card__container container rounded-4xl relative">
                <div className='card__content p-10 space-y-15 rounded-4xl'>
                    <h2 className='text-h2 font-semibold text-white w-190'>
                        Освободим ваше время, за счет автоматизации процессов и аналитики
                    </h2>

                    <p className='text-h5 font-medium text-white max-w-150'>
                        Возьмем на себя рутину, проконтролируем менеджеров и предоставим отчеты для стратегических решений
                    </p>

                    <div className='btn__container mt-4 w-70'>
                        <Button text="Консультация" variant={"outline"} />
                    </div>
                </div>

                {/* Фоновые телефоны */}
                <Image
                    className="absolute bottom-[-50px] right-[-45px] z-3"
                    src="/phoneBigbg.svg"
                    alt='card phone'
                    width={218}
                    height={318}
                />
                <Image
                    className="absolute bottom-[-40px] right-[-38px] z-4"
                    src="/phoneBig.svg"
                    alt='card phone'
                    width={205}
                    height={296}
                />
                <Image
                    className="absolute bottom-0 right-[92px] z-2"
                    src='/phoneMedium.svg'
                    alt='card phone'
                    width={206}
                    height={222}
                />
                <Image
                    className="absolute bottom-0 right-[280px] z-1"
                    src='/phoneSmall.svg'
                    alt='card phone'
                    width={192}
                    height={179}
                />
            </div>
        </motion.div>
    );
};

export default Card;
