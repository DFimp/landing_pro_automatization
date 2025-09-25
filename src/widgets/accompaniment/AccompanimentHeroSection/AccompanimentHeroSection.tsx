import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";

export const AccompanimentHeroSection = () => {
    return(
        <section>
            <div className='container flex flex-col gap-5 sm:gap-20'>
                <h2 className='mt-4 sm:mt-0 sm:text-h2 text-white sm:font-bold text-2xl font-semibold'>
                    Сопровождение
                </h2>

                <p className='sm:text-h4 text-[14px] text-white font-normal sm:mb-20 mb-7'>
                    <span className='font-bold'>Позаботимся</span> о том, чтобы amoCRM <span className='sm:font-bold'>
                        работала как часы</span>: возьмем на себя доработку и полное техническое
                    сопровождение.
                </p>
            </div>

            <StickyInfo
                text="<b>CRM</b> — это основа вашего бизнеса. Любые сбои в её работе напрямую влияют на его эффективность. "
                left={false}
                className="ml-auto max-w-[355px] sm:max-w-9999"
            />
        </section>
    )
}