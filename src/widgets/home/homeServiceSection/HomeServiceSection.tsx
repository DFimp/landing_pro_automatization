"use client"

import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ProcessList from "@/widgets/home/homeServiceSection/ui/ProcessList";
import { isMobile } from "@/shared/utils/isMobile";
export function HomeServicesSection() {
    const titleJsx = isMobile()
        ? <h2 className="text-2xl font-semibold">Чем мы можем помочь вашему бизнесу</h2>
        : <TitleArrow text="Чем мы можем помочь вашему бизнесу" link="/" />
    return (
        <section className='flex flex-col px-4 gap-5 sm:gap-20'>
            { titleJsx }
            <ProcessList />
        </section>
    );
}
