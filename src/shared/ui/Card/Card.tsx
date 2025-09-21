"use client"

import Image from "next/image";
import React, {useState} from "react";

interface CardProps {
    title?: string;
    content?: React.ReactNode;
    withArrow?: boolean;
    variant?: 'expandable' | 'simple';
    index?: number;
    description?: string[];
    result?: string;
    isFirst?: boolean;
    isLast?: boolean; // Добавляем новый пропс
}

export const Card = ({
                         title,
                         content,
                         withArrow = true,
                         variant = 'simple',
                         index,
                         description,
                         result,
                         isFirst = false,
                         isLast = false, // Значение по умолчанию
                     }: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (variant === 'expandable') {
        return (
            <li
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    snap-start shrink-0 bg-black text-white rounded-4xl px-10 py-10
                    flex flex-col justify-start relative cursor-pointer
                    transition-all duration-500 ease-in-out min-w-[360px] will-change-transform
                    ${isExpanded ? "max-h-[800px]" : "max-h-[270px]"}
                    ${isFirst ? "ml-[175px]" : ""}
                    ${isLast ? "mr-[15px]" : ""}
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
                            <p className={`mt-4 max-w-65 transition-opacity duration-600 ease-in-out ${isExpanded ? "opacity-100" : "opacity-0"}`}>
                                <span className="text-blue">В результате:</span> {result}.
                            </p>
                        )}
                    </>
                )}
            </li>
        );
    }

    return (
        <div className="card shrink-0 border-blue border-1 rounded-4xl py-10 px-10 relative sm:max-w-[300px] sm:w-auto w-full h-[310px]">
            <div className='flex justify-between flex-col h-full max-h-[150px]'>
                {title && <h3 className='font-bold text-h4'>{title}</h3>}
                {content && <div className="mt-4">{content}</div>}
            </div>

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