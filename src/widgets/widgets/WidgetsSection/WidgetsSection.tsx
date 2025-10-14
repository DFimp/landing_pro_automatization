'use client'

import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { WidgetsList } from "./ui/WidgetsList";
import { detectMobile } from '@/shared/utils/detectMobile';

import Image from "next/image";
export function WidgetsWidgetsSection() {
    const { isMobileView } = detectMobile()
    return (
        <div className='container -mt-[180px]! '>
        <div className="flex justify-between items-center mb-[30px]">
            <h2 className="text-white sm:text-[32px] text-[16px] font-semibold">
            Получите виджеты бесплатно. Настроим тоже мы
            </h2>
            <Image
                        src="/arrow_white.svg"
                        alt=""
                        width={isMobileView ? 42 : 113}
                        height={30}
                    />
        </div>
        <div className="">
        <WidgetsList></WidgetsList>
        </div>
        </div>
    );
}