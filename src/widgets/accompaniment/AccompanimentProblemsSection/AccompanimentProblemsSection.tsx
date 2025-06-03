import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ProblemsGrid from "@/widgets/problemsGrid/ProblemsGrid";

export function AccompanimentProblemsSection() {
    return (
        <section className='flex flex-col gap-20'>
            <TitleArrow
                text='Вот часть распространенных проблем, которые влияют на качество работы с клиентами'
                link='/'
                variant='secondary'
            />
            <ProblemsGrid />
        </section>
    );
}
