'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {data} from "@/widgets/resultList/lib";


export const AnimatedResultsList = () => {
    const ref = useRef<HTMLUListElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const itemVariants = {
        hidden: (i: number) => ({
            x: i % 2 === 0 ? 100 : -100,
            opacity: 0,
        }),
        visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    return (
        <ul ref={ref} className="space-y-10 mt-10">
            {data.map((item, i) => (
                <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={controls}
                    variants={itemVariants}
                    className={`bg-[#EBF0FD] flex items-center gap-8 py-4 ${
                        i % 2 === 0
                            ? 'rounded-r-4xl px-48 mr-[185px]'
                            : 'rounded-l-4xl ml-[175px] px-4'
                    }`}
                >
                    <h2 className="text-blue font-bold" style={{ fontSize: '64px' }}>
                        {i + 1}
                    </h2>
                    <div className="content">
                        <h3 className="text-h4 font-medium">{item.title}</h3>
                        <p className="text-h4 font-normal">{item.text}</p>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
};