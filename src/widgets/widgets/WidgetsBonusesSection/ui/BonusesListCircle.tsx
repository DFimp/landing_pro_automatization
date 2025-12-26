"use client"

import Image from "next/image";
import { detectMobile } from '@/shared/utils/detectMobile';

export function BonusesListCircle(){
    const { isMobileView } = detectMobile()
    return (
        <Image
        id="bonus_center"
        className="z-3 max-w-none sm:-mt-0 -mt-[200px]"
            src="/BonusesListCircle.png"
            alt="круг про автоматизацию"
            width={isMobileView ? 1000 : 582}
            height={isMobileView ? 800 : 582}
        />
    );
}