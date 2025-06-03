'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
    {
        image: '/help1.svg',
        title: 'Техническая поддержка',
        backside: {
            image: '/help01.svg',
            title: "Техническая поддержка",
            fixes: [
                "Устранение ошибок в работе системы.",
                "Обновление функционала и интеграций.",
                "Решение проблем с подключением телефонии, виджетов и внешних сервисов."
            ]
        }
    },
    {
        image: '/help2.svg',
        title: 'Доработка и кастомизация',
        backside: {
            image: '/help02.svg',
            title: "Доработка и кастомизация",
            fixes: [
                "Настройка CRM под уникальные бизнес-процессы.",
                "Создание кастомных полей, виджетов и автоматизаций.",
                "Интеграция с другими системами (ERP, маркетинговые платформы, мессенджеры)",
            ]
        }
    },
    {
        image: '/help3.svg',
        title: 'Автоматизация процессов',
        backside: {
            image: '/help03.svg',
            title: "Автоматизация процессов",
            fixes: [
                "Настройка воронок продаж и автозадач.",
                "Создание триггеров и бизнес-правил.",
                "Разработка шаблонов писем и документов"
            ]
        }
    },
    {
        image: '/help4.svg',
        title: 'Обучение сотрудников',
        backside: {
            image: '/help04.svg',
            title: "Обучение сотрудников",
            fixes: [
                "Проведение тренингов по использованию системы.",
                "Разработка инструкций и обучающих материалов.",
                "Консультирование по сложным сценариям работы.",
            ]
        }
    },
    {
        image: '/help5.svg',
        title: 'Мониторинг и оптимизация',
        backside: {
            image: '/help05.svg',
            title: "Мониторинг и оптимизация",
            fixes: [
                "Выявление узких мест в работе CRM.",
                "Оптимизация скорости и стабильности системы.",
                "Регулярное тестирование функционала.",
            ]
        }
    },
];

export default function HelpServices() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, threshold: 0.5 });

    const [flippedStates, setFlippedStates] = useState<boolean[]>(
        Array(services.length).fill(false)
    );

    useEffect(() => {
        if (isInView) {
            setFlippedStates((prev) => {
                const newState = [...prev];
                newState[0] = true; // только первая карточка
                return newState;
            });
        }
    }, [isInView]);

    const handleClick = (index: number) => {
        setFlippedStates((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div ref={containerRef} className='flex flex-wrap gap-12 mb-20'>
            {services.map((service, index) => {
                const isFlipped = flippedStates[index];
                const hasBack = !!service.backside;

                return (
                    <div
                        key={index}
                        onClick={() => hasBack && handleClick(index)}
                        className="relative w-[550px] h-[515px] perspective cursor-pointer"
                    >
                        <motion.div
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-full"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Front */}
                            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center text-center bg-transparent border-1 rounded-3xl shadow-xl shadow-[#3760E7] px-20 py-15 space-y-3">
                                <Image src={service.image} alt="Помощь" width={230} height={230} />
                                <h4 className='text-h4 font-bold text-white'>{service.title}</h4>
                            </div>

                            {/* Back */}
                            {hasBack && (
                                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center bg-transparent border-1 rounded-3xl shadow-xl shadow-[#3760E7] px-20 py-15 space-y-3">
                                    <Image src={service.backside.image} alt="Back" width={140} height={140} />
                                    <h4 className='text-h5 font-normal text-white mb-10'>{service.backside.title}</h4>
                                    <ul className='text-white list-disc text-left'>
                                        {service.backside.fixes.map((fix: string, i: number) => (
                                            <li key={i}>{fix}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}
