'use client'

import Image from "next/image";
import { useState } from "react";
import { services } from "@/widgets/accompaniment/AccompanimentHelpSection/ui/lib";
import * as motion from "motion/react-client";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function 
HelpServices() {
    const [flippedStates, setFlippedStates] = useState<boolean[]>(
        Array(services.length).fill(false)
    );
    const { isMobileView } = detectMobile()
    const [autoFlipped, setAutoFlipped] = useState(true);

    const handleClick = (index: number) => {
        setFlippedStates((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });

        // если пользователь кликнул по первой карточке — отключаем автофлип
        if (index === 0) {
            setAutoFlipped(false);
        }
    };

    return (
        <div className='flex flex-wrap gap-12 mb-20 container'>
            {services.map((service, index) => {
                const isFlipped = flippedStates[index];

                return (
                    <ul
                        key={index}
                        onClick={() => handleClick(index)}
                        className="relative w-[550px] sm:h-[515px] h-[302px] perspective cursor-pointer"
                    >
                        <motion.li
                            className="relative w-full h-full"
                            style={{ transformStyle: "preserve-3d" }}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.8 }}
                            onViewportEnter={() => {
                                if (index === 0 && autoFlipped) {
                                    setFlippedStates((prev) => {
                                        const newState = [...prev];
                                        newState[0] = true;
                                        return newState;
                                    });
                                }
                            }}
                            viewport={{ once: true, amount: 1 }} // только когда хотя бы 60% карточки видно
                        >
                            {/* Front */}
                            <div
                                style={{ boxShadow: isMobileView ? '0 4px 4px #3760E780' : `0 0 15px rgba(55, 96, 231, 0.5)` }}
                                className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center text-center bg-transparent border sm:rounded-3xl rounded-[60px] px-20 py-15 space-y-3"
                            >
                                <Image src={service.image} alt="Помощь" width={isMobileView ? 115 : 230} height={isMobileView ? 115 : 230} />
                                <h4 className='text-h4 font-bold text-white'>{service.title}</h4>
                            </div>

                            {/* Back */}
                            <div
                                style={{ boxShadow: `0 0 15px rgba(55, 96, 231, 0.5)` }}
                                className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center bg-transparent border sm:rounded-3xl rounded-[60px] sm:px-20 px-10 py-15 space-y-3"
                            >
                                <Image src={service.backside.image} alt="Back" width={isMobileView ? 70 : 140} height={isMobileView ? 70 : 140} />
                                <h4 className='sm:text-h5 sm:font-normal font-semibold text-white sm:mb-10'>{service.backside.title}</h4>
                                <ul className='text-white text-[12px] sm:text-base list-disc text-left'>
                                    {service.backside.fixes.map((fix: string, i: number) => (
                                        <li key={i}>{fix}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    </ul>
                );
            })}
        </div>
    );
}
