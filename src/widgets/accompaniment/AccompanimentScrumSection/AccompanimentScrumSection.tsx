import StepTimeline from "@/widgets/accompaniment/AccompanimentScrumSection/ui/StepTimeline";


export function AccompanimentScrumSection() {
    return (
        <div className='flex flex-col gap-20 mt-20'>
            <h3 className='font-semibold text-h3 text-white container'>
                Как мы работаем: четко и по Scrum
            </h3>
            <h4 className='font-semibold text-h4 text-white mb-20 container'>
                Мы используем гибкую методологию <span className='font-bold text-h3'>Scrum</span>, чтобы ваше сопровождение amoCRM было <span className='text-h3 font-bold'>эффективным и прозрачным</span>.
            </h4>
            <StepTimeline />
            <h4 className='text-h4 font-medium text-white container'>
                Такой подход позволяет оперативно реагировать на изменения, соблюдать сроки и обеспечивать высокое
                качество работы.
            </h4>
        </div>
    );
}
