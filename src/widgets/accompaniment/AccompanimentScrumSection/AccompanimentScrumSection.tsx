import StepTimeline from "@/widgets/accompaniment/AccompanimentScrumSection/ui/StepTimeline";


export function AccompanimentScrumSection() {
    return (
        <>
            <div className='flex flex-col sm:gap-20 gap-10 sm:mt-20 mt-10'>
                <h3 className='font-semibold sm:text-h3 text-2xl text-white container'>
                    Как мы работаем: четко и по Scrum
                </h3>
                <h4 className='font-light sm:text-h4 text-white mb-20 container'>
                    Мы используем гибкую методологию <span className='font-semibold'>Scrum</span>,
                    чтобы ваше сопровождение amoCRM было <span className='font-semibold'>эффективным и прозрачным</span>.
                </h4>
            </div>

            <StepTimeline />

            <div className='container'>
                <h4 className='sm:text-h4 font-medium text-white mt-40'>
                    Такой подход позволяет оперативно реагировать на изменения, соблюдать сроки и обеспечивать высокое
                    качество работы.
                </h4>
             </div>
        </>
    );
}
