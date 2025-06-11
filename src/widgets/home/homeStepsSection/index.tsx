import WorkSteps from "@/widgets/home/homeStepsSection/ui/WorkSteps";
import {TitleArrow} from "@/shared/ui/titleArrow/TitleArrow";

export function HomeStepsSection() {
    return (
        <section>
            <TitleArrow
                className='mt-20'
                text="Как мы работаем?"
                link="/"
                variant='outline' />
            <WorkSteps />
        </section>
    );
}
