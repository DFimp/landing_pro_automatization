'use client'

import { useEffect } from "react";
import { BonusesListItem } from "./BonusesListItem";
import { BonusesListCircle } from "./BonusesListCircle";
import { detectMobile } from '@/shared/utils/detectMobile';


export function BonusesList() {
    const { isMobileView } = detectMobile()
    useEffect(() => {
        const canvas = document.querySelector("canvas");
        const circle = document.getElementById("bonus_center")
        const bonuses = document.querySelectorAll(".bonus")
        const container = document.getElementById("bonuses_list")
        if (canvas && circle && bonuses && container) {
            const containerRect = container.getBoundingClientRect()
            const canvasRect = canvas.getBoundingClientRect()
            const circleRect = circle.getBoundingClientRect()
            canvas.width = containerRect.width
            canvas.height = containerRect.height
            const ctx = canvas.getContext("2d");
            if (ctx) {
                bonuses.forEach((bonus, index) => {
                    const bonusRect = bonus.getBoundingClientRect()
                    ctx.beginPath();
                    ctx.strokeStyle = "white";
                    const heightOffset = index < 2 ? bonusRect.height / 2 : 0
                    let widhtOffset = 0
                    switch (index) {
                        case 0:
                            widhtOffset = bonusRect.width
                            break;
                        case 1:
                            widhtOffset = 0
                            break;
                        case 2:
                            widhtOffset = bonusRect.width / 1.25
                            break;
                        case 3:
                            widhtOffset = bonusRect.width / 3
                            break;
                    }
                    ctx.moveTo((circleRect.width / 2 + circleRect.x) - canvasRect.x, (circleRect.height / 2 + circleRect.y) - canvasRect.y);  
                    ctx.lineTo((widhtOffset + bonusRect.x) - canvasRect.x, (heightOffset + bonusRect.y) - canvasRect.y);
                    ctx.stroke();
                })
                
            }
        }
    }, [isMobileView])
    return (
        <div id="bonuses_list" className='relative sm:h-[600px] flex flex-col gap-[20px] justify-center items-center'>
            <BonusesListCircle></BonusesListCircle>
        {isMobileView ? (
            <>
            <BonusesListItem className="-mt-[200px] text-center" text="Все наши виджеты бесплатно"></BonusesListItem>
            <BonusesListItem className="text-center" text="Персональный менеджер"></BonusesListItem>
            <BonusesListItem className="text-center" text="Дополнительные месяцы использования"></BonusesListItem>
            <BonusesListItem className="text-center" text="Диагностика по проверенному чек-листу "></BonusesListItem>
            <BonusesListItem className="text-center" text="Специальный чат для решения проблем"></BonusesListItem>
            </>
        )
        : (<>
        <canvas className="w-full h-full absolute"></canvas>
        <BonusesListItem className='bonus sm:absolute left-0 top-[58px]' text="Все наши виджеты бесплатно"></BonusesListItem>
        <BonusesListItem className='bonus sm:absolute right-0 top-[100px]' text="Дополнительные месяцы использования"></BonusesListItem>   
        <BonusesListItem className='bonus sm:absolute left-0 bottom-[98px]' text="Диагностика по проверенному чек-листу "></BonusesListItem>
         <BonusesListItem className='bonus sm:absolute right-0 bottom-0' text="Персональный менеджер, поддержка и диагностика проблем<br/>в выделенном чате"></BonusesListItem></>)}     
        </div>
    );
}