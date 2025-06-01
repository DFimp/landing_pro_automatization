'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Services } from "@/widgets/services/Services";

const steps = [
    {
        content: "Анализ и интервью с ключевыми лицами компании для составления ТЗ",
        description: [
            "Общее описание компании: сфера деятельности, структура, количество сотрудников.",
            "Текущие бизнес-процессы: как сейчас осуществляется управление продажами, маркетингом, взаимодействием с клиентами.",
            "Проблемы и задачи: выявленные проблемы в текущих процессах (например, ручной ввод данных, потеря информации, сложности в аналитике)."
        ],
        result: "готовое ТЗ на внедрение, стоимость, сроки"
    },
    {
        content: "Базовая настройка",
        description: [
            "Настройка пользователей и прав доступа.",
            "Настройка воронки продаж (канбан).",
            "Настроим поля сделок и контактов.",
            "Подключим телефонию и мессенджеры.",
            "Подключим все источники сделок."
        ],
        result: "менеджеры могут работать в системе."
    },
    {
        content: "Автоматизация рутинных действий",
        description: [
            "На основе обратной связи от сотрудников составим план автоматизации.",
            "Внедрим документооборот.",
            "Автоматизируем постановку задач и автоматическую смену статусов.",
            "Автоматические касания клиентов.",
            "Автоматическое формирование ссылок на оплату.",
            "Внедрим любые виджеты."
        ],
        result: "автоматизированный отдел продаж, который не тратит время на рутину"
    },
    {
        content: "Обучение сотрудников",
        description: [
            "Покажем менеджерам как работать в CRM от получения заявки до подписания актов",
            "Научим руководителей контролировать менеджеров и получать любую информацию из CRM"
        ],
        result: "менеджеры могут работать в системе."
    },
];

export default function WorkSteps() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <>
            <Services text="Как мы работаем?" link="/" variant='outline'/>

            <div className="w-full overflow-hidden">
                <div
                    ref={scrollRef}
                    className="overflow-hidden scrollbar-none"
                >
                    <ul className="flex gap-4 snap-x snap-mandatory pr-4">
                        {steps.map((step, index) => {
                            const isExpanded = expandedIndex === index;

                            return (
                                <li
                                    key={index}
                                    onClick={() =>
                                        setExpandedIndex(isExpanded ? null : index)
                                    }
                                    className={`
                                        snap-start shrink-0 bg-black text-white rounded-4xl px-10 py-10
                                        flex flex-col justify-between relative cursor-pointer
                                        transition-all duration-500 ease-in-out min-w-[360px] will-change-transform
                                        ${isExpanded ? "max-h-[800px]" : "max-h-[270px]"}
                                        overflow-hidden
                                    `}
                                >
                                    <div>
                                        <h4 className="text-h4 font-bold">
                                            Шаг - {index + 1}.
                                        </h4>
                                        <p className="font-semibold text-h5 max-w-62.5">
                                            {step.content}
                                        </p>

                                        {!isExpanded && (
                                            <button className="absolute bottom-10 right-8">
                                                <Image
                                                    src="/arrow btn.svg"
                                                    alt="Кнопка"
                                                    width={55}
                                                    height={55}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {step.description && (
                                        <div
                                            className={`
                                                transition-all duration-500 ease-in-out mt-8
                                                ${isExpanded
                                                ? "opacity-100"
                                                : "opacity-0"}
                                            `}
                                        >
                                            <ul className="max-w-60 space-y-5 list-disc list-inside">
                                                {step.description.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>

                                            <p className="mt-4 max-w-60">
                                                <span className="text-blue">В результате:</span> {step.result}.
                                            </p>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
