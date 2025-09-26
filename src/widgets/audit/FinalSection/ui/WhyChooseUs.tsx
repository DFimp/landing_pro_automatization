'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { motion, useInView, useAnimationControls } from 'motion/react';
import { detectMobile } from '@/shared/utils/detectMobile';
import { TitleArrow } from '@/shared/ui/titleArrow/TitleArrow';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3 });
    const controls = useAnimationControls();
    const { isMobileView } = detectMobile()
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
        <div className="sm:mt-20 mt-10">
            <div className="sm:text-center container overflow">
                {
                    isMobileView
                    ? <TitleArrow text='Почему выбирают нас?' link='/' className='mb-6'/>
                    : <h2 className="font-bold text-h2 mb-6">Почему выбирают нас?</h2>
                }
                <div className="mx-auto max-w-3xl px-4 sm:mb-20">
                    <p className="sm:text-h5 text-[14px] font-normal">
                        Автоматизация становится умнее с каждым днем —{' '}
                        <span className="sm:font-medium sm:text-h4">Мы</span>{' '}
                        внедряем самые актуальные инструменты, чтобы{' '}
                        <span className="sm:font-medium sm:text-h4">Вы</span>{' '}
                        оставались впереди конкурентов.
                    </p>
                </div>
            </div>

            {isMobileView && <div className='w-full overflow-hidden h-[200px] relative flex items-center justify-center'>
                <div className='h-[40px] w-[1000px] absolute bg-[#3760E7] text-center rotate-z-[-6.29deg] flex items-center gap-2'>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                    <span className='text-white text-[24px] font-semibold'>AMO</span>
                    <span className='text-white text-[24px] font-semibold'>CRM</span>
                </div>
            </div>}

            {/* Первая строка */}
            <div className="sm:mb-12 mb-5 relative sm:h-[310px] overflow-hidden">
                <div className="flex sm:flex-row flex-col gap-20 container h-full">
                    <div className="flex sm:flex-row flex-col gap-5 items-center">
                        <Card
                            title="Опыт"
                            content={
                                <p className='sm:font-base sm:text-base text-[24px] my-[40px]'>
                                    Более <span className="text-blue text-6xl sm:font-normal font-bold">100</span> успешных проектов
                                </p>
                            }
                        />
                        <Card
                            title="Прозрачность"
                            content={<p className='sm:font-base sm:text-base text-[24px] my-[40px]' >Вы всегда в курсе, что мы делаем.</p>}
                        />

                        { !isMobileView && <motion.div
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
                        </motion.div>}
                    </div>
                </div>
            </div>

            {/* Вторая строка */}
            <div className="relative sm:h-[310px] overflow-hidden">
                <div className="flex sm:flex-row flex-col justify-end gap-5 container h-full">
                    <div className="flex sm:flex-row flex-col gap-5 items-center">
                        { !isMobileView && <motion.div
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
                        </motion.div> }

                        <Card
                            title="Современные технологии"
                            content={<p className='sm:font-base sm:text-base text-[24px] my-[40px]' >Используем лучшие инструменты и методы.</p>}
                        />
                        <Card
                            title="Индивидуальный подход"
                            content={<p className='sm:font-base sm:text-base text-[24px] my-[40px]'>Каждое решение подстроено под вас.</p>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
