'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const problems = [
    {
        image: '/problem1.svg',
        title: 'Отсутствие актуальной информации в карточке сделки',
        description: 'Руководитель при заходе в карточку не понимает, на какой стадии диалог с клиентом. Любой другой ' +
            'сотрудник также, без переслушивания всех звонков из карточки, не сможет понять происходящее.'
    },
    {
        image: '/problem2.svg',
        title: 'Тромбы \n' +
            '(зависание сделки) на этапах',
        description: 'Тромб может быть связан с отсутствием дожима, с неактуальным статусом (когда сотрудники не меняют ' +
            'этап), с необходимостью улучшить механики взаимодействия с клиентами, как например в случае недозвонов в ' +
            'начале воронки.'
    },
    {
        image: '/problem3.svg',
        title: 'Неактуальная аналитика (не меняются статусы)',
        description: 'Несмотря на все регламенты - людям свойственно забывать, ошибаться. От этого не должна страдать ' +
            'аналитика на основе которой строятся важные стратегические задачи.'
    },
    {
        image: '/problem4.svg',
        title: 'Плохая квалификация, нет возможности сегментировать базу',
        description: 'Отсутствие понимания какую должность занимает клиент,отсутствие e-mail или номера телефона, даты ' +
            'рождения, принадлежности компании, имени. Все это минимизирует возможность сегментации и красоту цифровых ' +
            'касаний.'
    },
    {
        image: '/problem5.svg',
        title: 'Не ведется работа с отказниками',
        description: 'Правильно проработав причину отказа, клиента можно реанимировать и закрыть в успех. Посмотрите ' +
            'общую сумму всех отказов в воронке и посчитайте, сколько заработаете при реанимации хотя бы 1% от всех сделок?'
    },
];

export default function ProblemsGrid() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.1 });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (inView && !hasAnimated.current) {
            hasAnimated.current = true;
            controls.start((i) => ({
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: i * 0.2 }
            }));
        }
    }, [inView, controls]);

    return (
        <div ref={ref} className='flex flex-wrap items-center justify-center gap-8'>
            {problems.map((problem, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={controls}
                    className='card border-1 rounded-3xl shadow-xl shadow-[#3760E7] px-10 py-15 space-y-3 max-w-85'
                >
                    <Image src={problem.image} alt="Проблема и ее решение" width={92} height={94} />
                    <h3 className='text-white font-medium text-h5'>{problem.title}</h3>
                    <h4 className='text-white font-light text-h5'>{problem.description}</h4>
                </motion.div>
            ))}
        </div>
    );
}
