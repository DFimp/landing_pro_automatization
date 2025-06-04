import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";

export const AccompanimentHeroSection = () => {
    return(
        <section>
            <div className='container flex flex-col gap-20'>
                <h2 className='text-h2 text-white font-bold'>
                    Сопровождение
                </h2>

                <p className='text-h4 text-white font-normal mb-20'>
                    <span className='font-bold'>Позаботимся</span> о том, чтобы amoCRM <span className='font-bold'>
                        работала как часы</span>: возьмем на себя доработку и полное техническое
                    сопровождение.
                </p>
            </div>

            <StickyInfo
                className='max-w-[1160px]'
                text="CRM — это основа вашего бизнеса. Любые сбои в её работе напрямую влияют на его эффективность. "
                left={false}
            />
        </section>
    )
}