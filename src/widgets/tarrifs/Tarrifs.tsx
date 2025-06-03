'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Button from "@/shared/ui/button/Button";
import { Tariff } from "@/widgets/tarrifs/models";

const tariffs: Tariff[] = [
    {
        title: "Малый бизнес",
        price: "20 000р",
        features: [
            "для компаний до 5 сотрудников",
            "включено 6 часов работы",
            "бизнес-аналитика"
        ]
    },
    ...Array(2).fill({
        title: "Малый бизнес",
        price: "20 000р",
        features: [
            "для компаний до 5 сотрудников",
            "включено 6 часов работы",
            "бизнес-аналитика"
        ]
    })
];

export default function Tariffs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start(i => ({
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.6,
                    delay: i * 0.3
                }
            }));
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} className='flex justify-between items-center gap-8'>
            {tariffs.map((tariff: Tariff, index: number) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={controls}
                    className='card border-1 rounded-3xl shadow-xl shadow-[#3760E7] px-10 py-15 max-w-85 space-y-10'
                >
                    <h3 className='text-white font-semibold text-h4'>{tariff.title}</h3>
                    <ul className='list-disc text-white font-normal text-h5'>
                        {tariff.features.map((feature: string, i: number) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <h4 className='text-white font-semibold text-h4'>{tariff.price}</h4>
                    <Button text="Купить" variant='outline' />
                </motion.div>
            ))}
        </div>
    );
}
