"use client"

import Image from "next/image";
import React, {useState} from "react";
import { detectMobile } from "@/shared/utils/detectMobile";

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
    const { isMobileView } = detectMobile()
    if (variant === 'expandable') {
        return (
            <li
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    snap-start shrink-0 bg-black text-white rounded-4xl px-10 py-10
                    flex flex-col justify-start relative cursor-pointer
                    transition-all duration-500 ease-in-out min-w-[360px] will-change-transform
                    ${isExpanded ? "max-h-[800px]" : "sm:max-h-[270px] max-h-[160px]"}
                    ${isFirst ? "ml-[175px]" : ""}
                    ${isLast ? "mr-[15px]" : ""}
                `}
            >
                <div className='card__header'>
                    <h4 className="sm:text-h4 text-[14px] font-bold sm:mb-0 mb-2">Шаг - {index! + 1}.</h4>
                    <p className="font-semibold sm:text-h5 text-[14px] max-w-62.5">
                        {content}
                    </p>

                    {!isExpanded && withArrow && (
                        <button className="absolute sm:bottom-10 bottom-6 sm:right-8 right-6">
                            <Image
                                src="/services/Audit/arrow btn.svg"
                                alt="кнопка"
                                width={isMobileView ? 34 : 55}
                                height={isMobileView ? 34 : 55}
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
                                    <li className="text-[14px] sm:text-base" key={i}>{item}</li>
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
        <div className="card shrink-0 border-blue border-1 rounded-4xl py-10 px-10 relative sm:max-w-[300px] sm:w-auto w-full sm:h-[310px]  h-[330px]">
            <div className='sm:flex sm:justify-between flex-col h-full sm:max-h-[150px]'>
                {title && <h3 className='font-bold text-h4'>{title}</h3>}
                {content && <div className="mt-4">{content}</div>}
            </div>

            {withArrow && (
                <button className="absolute bottom-10 right-8">
                    <Image
                        src="/services/Audit/arrow btn.svg"
                        alt="кнопка"
                        width={55}
                        height={55}
                    />
                </button>
            )}
        </div>
    );
};