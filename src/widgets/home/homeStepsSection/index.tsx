"use client"

import WorkSteps from "@/widgets/home/homeStepsSection/ui/WorkSteps";
import {TitleArrow} from "@/shared/ui/titleArrow/TitleArrow";
import { detectMobile } from "@/shared/utils/detectMobile";

export function HomeStepsSection() {
    const { isMobileView } = detectMobile()
    return (
        <section className="container">
            <TitleArrow
                className='sm:mt-20'
                text="Как мы работаем?"
                link="/"
                key={Number(isMobileView)}
                variant={isMobileView ? 'primary' : 'outline'} />
            <WorkSteps />
        </section>
    );
}
