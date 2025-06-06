'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { motion, useInView, useAnimationControls } from 'framer-motion';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3 });
    const controls = useAnimationControls();
    const [offsetX, setOffsetX] = useState(300); // по умолчанию

    // Вычисление X в зависимости от ширины экрана
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const x = Math.round(-0.3906 * width + 900);
            setOffsetX(x);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const firstImage = {
        visible: { x: offsetX },
        hidden: { x: offsetX + 200 },
    };

    const secondImage = {
        visible: { x: -offsetX },
        hidden: { x: -offsetX - 250 },
    };

    useEffect(() => {
        controls.start(inView ? 'visible' : 'hidden');
    }, [inView, controls]);

    return (
        <div className="mt-20">
            <div className="text-center container overflow">
                <h2 className="font-bold text-h2 mb-6">Почему выбирают нас?</h2>
                <div className="mx-auto max-w-3xl px-4 mb-20">
                    <p className="text-h5 font-normal">
                        Автоматизация становится умнее с каждым днем —
                        <span className="font-medium text-h4"> Мы </span>
                        внедряем самые актуальные инструменты, чтобы
                        <span className="font-medium text-h4"> Вы </span>
                        оставались впереди конкурентов.
                    </p>
                </div>
            </div>

            {/* Первая строка */}
            <div className="mb-12 relative h-[310px] overflow-hidden">
                <div className="flex gap-20 container h-full">
                    <div className="flex gap-5 items-center">
                        <Card
                            title="Опыт"
                            content={
                                <p>
                                    Более <span className="text-blue text-6xl">100</span> успешных проектов
                                </p>
                            }
                        />
                        <Card
                            title="Прозрачность"
                            content={<p>Вы всегда в курсе, что мы делаем.</p>}
                        />
                    </div>

                    <motion.div
                        className="absolute top-0 right-0 h-full"
                        initial="hidden"
                        animate={controls}
                        variants={firstImage}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/amo.svg"
                            alt="AMO"
                            width={1000}
                            height={310}
                            style={{
                                width: 'auto',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Вторая строка */}
            <div className="relative h-[310px] overflow-hidden">
                <div className="flex justify-end gap-5 container h-full">
                    <div ref={ref} className="flex gap-5 items-center">
                        <Card
                            title="Современные технологии"
                            content={<p>Используем лучшие инструменты и методы.</p>}
                        />
                        <Card
                            title="Индивидуальный подход"
                            content={<p>Каждое решение подстроено под вас.</p>}
                        />
                    </div>

                    <motion.div
                        className="absolute bottom-0 left-0 h-full"
                        initial="hidden"
                        animate={controls}
                        variants={secondImage}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/crm.svg"
                            alt="CRM"
                            width={1000}
                            height={310}
                            style={{
                                width: 'auto',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
