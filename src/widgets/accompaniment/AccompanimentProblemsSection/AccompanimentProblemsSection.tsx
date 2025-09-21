import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ProblemsGrid from "@/widgets/accompaniment/AccompanimentProblemsSection/ui/ProblemsGrid";

export function AccompanimentProblemsSection() {
    return (
        <section className='flex flex-col gap-20'>
            <TitleArrow
                className='sm:mt-40 mt-10 text-2xl font-semibold'
                text='Вот часть распространенных проблем, которые влияют на качество работы с клиентами'
                link='/'
                variant='secondary'
            />
            <ProblemsGrid />
        </section>
    );
}
