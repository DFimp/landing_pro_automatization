"use client"

import WorkSteps from "@/widgets/home/homeStepsSection/ui/WorkSteps";
import {TitleArrow} from "@/shared/ui/titleArrow/TitleArrow";
import { isMobile } from "@/shared/utils/isMobile";

export function HomeStepsSection() {
    return (
        <section className="container">
            <TitleArrow
                className='mt-20'
                text="Как мы работаем?"
                link="/"
                variant={isMobile() ? 'primary' : 'outline'} />
            <WorkSteps />
        </section>
    );
}
