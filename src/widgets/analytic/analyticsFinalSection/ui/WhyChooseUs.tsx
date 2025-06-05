'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { motion, useInView, useAnimationControls } from 'framer-motion';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 1 });
    const controls = useAnimationControls();

    // Варианты для обоих motion.div
    const firstImage = {
        visible: { x: 730 },
        hidden: { x: 940},
    };

    const secondImage = {
        visible: { x: -740},
        hidden: { x: -930},
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
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

            {/* Первая строка с карточками и AmoCRM справа */}
            <div className="mb-12 relative h-[310px]">
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
                            content={
                                <p>
                                    Вы всегда в курсе, что мы делаем.
                                </p>
                            }
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
                            src="/amocrm.svg"
                            alt="AMO"
                            width={575}
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

            {/* Вторая строка с карточками и RM слева */}
            <div
                 className="relative h-[310px]">
                <div className="flex justify-end gap-5 container h-full">
                    <div className="flex gap-5 items-center">
                        <Card
                            title="Современные технологии"
                            content={
                                <p>
                                    Используем лучшие инструменты и методы.
                                </p>
                            }
                        />
                        <Card
                            title="Индивидуальный подход"
                            content={
                                <p>
                                    Каждое решение подстроено под вас.
                                </p>
                            }
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
                            src="/amocrm.svg"
                            alt="CRM"
                            width={575}
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
            <div ref={ref} className='marker'></div>
        </div>
    );
};

export default WhyChooseUs;
