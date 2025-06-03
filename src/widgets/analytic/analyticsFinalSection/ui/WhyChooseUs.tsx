'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import { Card } from "@/shared/ui/Card/Card";
import { motion, useInView } from 'framer-motion';

const WhyChooseUs = () => {
    const amoRef = useRef(null);
    const isInView = useInView(amoRef, {
        threshold: 0.5, // половина элемента в зоне видимости
        once: true
    });

    return (
        <section>
            <div className="text-center container overflow">
                <h2 className='font-bold text-h2 mb-6'>Почему выбирают нас?</h2>
                <div className='mx-auto max-w-3xl px-4'>
                    <p className='text-h5 font-normal mb-6'>
                        Автоматизация становится умнее с каждым днем —
                        <span className='font-medium text-h4'> Мы </span>
                        внедряем самые актуальные инструменты, чтобы
                        <span className='font-medium text-h4'> Вы </span>
                        оставались впереди конкурентов.
                    </p>
                </div>
            </div>

            {/* Первая строка с карточками и AmoCRM справа */}
            <div className='mb-12 relative'>
                <div className='flex gap-20 container'>
                    <Card
                        title="Опыт"
                        content={
                            <p>
                                Более <span className='text-blue text-6xl'>100</span> успешных проектов
                            </p>
                        }
                    />
                    <Card
                        title="Опыт"
                        content={
                            <p>
                                Более <span className='text-blue text-6xl'>100</span> успешных проектов
                            </p>
                        }
                    />
                </div>

                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='absolute top-0 right-0 overflow-x-hidden'
                >
                    <Image
                        src='/amo.svg'
                        alt="AmoCRM"
                        width={575}
                        height={310}
                    />
                </motion.div>
            </div>

            {/* Вторая строка с карточками и RM слева */}
            <div className='relative' ref={amoRef}>
                <div className='flex justify-end gap-20 container'>
                    <Card
                        title="Опыт"
                        content={
                            <p>
                                Более <span className='text-blue text-6xl'>100</span> успешных проектов
                            </p>
                        }
                    />
                    <Card
                        title="Опыт"
                        content={
                            <p>
                                Более <span className='text-blue text-6xl'>100</span> успешных проектов
                            </p>
                        }
                    />
                </div>

                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='absolute top-0 left-0'
                >
                    <Image
                        src='/rm.svg'
                        alt="RM"
                        width={575}
                        height={310}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
