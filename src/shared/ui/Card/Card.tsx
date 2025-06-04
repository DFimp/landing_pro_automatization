'use client';

import React, { useState } from "react";
import Image from "next/image";

interface CardProps {
    // Общие пропсы
    title?: string;
    content?: React.ReactNode;
    withArrow?: boolean;
    variant?: 'expandable' | 'simple';

    // Пропсы для expandable варианта
    index?: number;
    description?: string[];
    result?: string;
    isFirst?: boolean;
}

export const Card = ({
                         title,
                         content,
                         withArrow = true,
                         variant = 'simple',
                         index,
                         description,
                         result,
                         isFirst = false
                     }: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (variant === 'expandable') {
        return (
            <li
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    snap-start shrink-0 bg-black text-white rounded-4xl px-10 py-10
                    flex flex-col justify-between relative cursor-pointer
                    transition-all duration-500 ease-in-out min-w-[360px] will-change-transform
                    ${isExpanded ? "max-h-[800px]" : "max-h-[270px]"}
                    ${isFirst ? "ml-[175px]" : ""}
                `}
            >
                <div className='card__header'>
                    <h4 className="text-h4 font-bold">Шаг - {index! + 1}.</h4>
                    <p className="font-semibold text-h5 max-w-62.5">
                        {content}
                    </p>

                    {!isExpanded && withArrow && (
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

                {description && (
                    <>
                        <div
                            className={`
                                transition-all duration-500 ease-in-out mt-8 flex flex-col justify-between
                                ${isExpanded ? "opacity-100" : "opacity-0"}
                            `}
                        >
                            <ul className="max-w-60 space-y-5 list-disc list-inside">
                                {description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {result && (
                            <p className="mt-4 max-w-65">
                                <span className="text-blue">В результате:</span> {result}.
                            </p>
                        )}
                    </>
                )}
            </li>
        );
    }

    // Simple вариант
    return (
        <div className="card border-blue border-1 rounded-4xl py-10 px-10 relative max-w-[300px] h-[310px]">
            {title && <h3 className='font-bold text-h4'>{title}</h3>}
            {content && <div className="mt-4">{content}</div>}

            {withArrow && (
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
    );
};