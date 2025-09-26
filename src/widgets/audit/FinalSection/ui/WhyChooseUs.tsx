'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { motion, useInView, useAnimationControls } from 'motion/react';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3 });
    const controls = useAnimationControls();

    const [offsetRight, setOffsetRight] = useState(210);
    const [offsetLeft, setOffsetLeft] = useState(-300);

    // Вычисление X в зависимости от ширины экрана
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            const right = Math.round(0.546875 * width - 630); // при 1536 → 210, при 1920 → 420
            const left = Math.round(-0.78125 * width + 900);  // при 1536 → -300, при 1920 → -600

            setOffsetRight(right);
            setOffsetLeft(left);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        controls.start(inView ? 'visible' : 'hidden');
    }, [inView, controls]);

    return (
        <div className="mt-20">
            <div className="text-center container overflow">
                <h2 className="font-bold text-h2 mb-6">Почему выбирают нас?</h2>
                <div className="mx-auto max-w-3xl px-4 mb-20">
                    <p className="text-h5 font-normal">
                        Автоматизация становится умнее с каждым днем —{' '}
                        <span className="font-medium text-h4">Мы</span>{' '}
                        внедряем самые актуальные инструменты, чтобы{' '}
                        <span className="font-medium text-h4">Вы</span>{' '}
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

                        <motion.div
                            className="h-full w-[1000px] relative flex-shrink-0"
                            style={{ minWidth: '600px', maxWidth: '1000px' }}
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { x: 0 },
                                hidden: { x: offsetRight }
                            }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src="/amo.svg"
                                alt="AMO"
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                                priority
                            />
                            <div
                                style={{
                                    backgroundColor: "#3760e7",
                                    height: '100%', 
                                    width: '50vw',
                                    borderRadius: '20px',              
                                }}
                            > 
                            
                            </div>
                                
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Вторая строка */}
            <div className="relative h-[310px] overflow-hidden">
                <div className="flex justify-end gap-5 container h-full">
                    <div className="flex gap-5 items-center">
                        <motion.div
                            className="h-full w-[1000px] relative flex-shrink-0"
                            style={{ minWidth: '600px' }}
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { x: 0 },
                                hidden: { x: offsetLeft }
                            }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src="/crm.svg"
                                alt="CRM"
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                                priority
                            />
                            <div
                                style={{
                                backgroundColor: "#3760e7",
                                height: '100%', 
                                width: '50vw',
                                borderRadius: '20px',
                                position: 'absolute',
                                right: '0',
                                zIndex: '-1'                                
                                }}
                            >        
                            </div>
                        </motion.div>

                        <Card
                            title="Современные технологии"
                            content={<p>Используем лучшие инструменты и методы.</p>}
                        />
                        <Card
                            title="Индивидуальный подход"
                            content={<p>Каждое решение подстроено под вас.</p>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
