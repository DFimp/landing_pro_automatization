import {TitleArrow} from "@/shared/ui/titleArrow/TitleArrow";
import "./style.css"
import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import Image from "next/image";
import StepTimeline from "@/widgets/StepTimeline/StepTimeline";


export default function Accompaniment() {
    return (
        <main id="accompaniment" className="accompaniment mb-25 pt-15 mb-20">
            <div className='accompaniment__container container space-y-20' >
                <div className='space-y-10'>
                    <h2 className='text-h2 text-white font-bold'>
                        Сопровождение
                    </h2>
                    <p className='text-h4 text-white font-normal'>
                        <span className='font-bold'>Позаботимся</span> о том, чтобы amoCRM <span className='font-bold'>
                    работала как часы</span>: возьмем на себя доработку и полное техническое
                        сопровождение.
                    </p>
                </div>


                <StickyInfo
                    left={false}
                    text="CRM — это основа вашего бизнеса. Любые сбои в её работе напрямую влияют на его эффективность. "
                />

                <TitleArrow
                    text='Вот часть распространенных проблем, которые влияют на качество работы с клиентами'
                    link='/'
                    variant='secondary'
                />

                <div className='flex flex-wrap items-center justify-center gap-8'>
                    <div className='card border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-10 py-15 space-y-3 max-w-85'>
                        <Image src='/problem1.svg' alt="Проблема и ее решение" width={92} height={94} />
                        <h3 className='text-white font-medium text-h5'>Отсутствие актуальной информации в карточке сделки</h3>
                        <h4 className='text-white font-light text-h5'>
                            Руководитель при заходе в карточку не понимает, на какой стадии диалог с клиентом. Любой другой
                            сотрудник также, без переслушивания всех звонков из карточки, не сможет понять происходящее.
                        </h4>
                    </div>
                    <div className='card border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-10 py-15 space-y-3 max-w-85'>
                        <Image src='/problem1.svg' alt="Проблема и ее решение" width={92} height={94} />
                        <h3 className='text-white font-medium text-h5'>Отсутствие актуальной информации в карточке сделки</h3>
                        <h4 className='text-white font-light text-h5'>
                            Руководитель при заходе в карточку не понимает, на какой стадии диалог с клиентом. Любой другой
                            сотрудник также, без переслушивания всех звонков из карточки, не сможет понять происходящее.
                        </h4>
                    </div>
                    <div className='card border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-10 py-15 space-y-3 max-w-85'>
                        <Image src='/problem1.svg' alt="Проблема и ее решение" width={92} height={94} />
                        <h3 className='text-white font-medium text-h5'>Отсутствие актуальной информации в карточке сделки</h3>
                        <h4 className='text-white font-light text-h5'>
                            Руководитель при заходе в карточку не понимает, на какой стадии диалог с клиентом. Любой другой
                            сотрудник также, без переслушивания всех звонков из карточки, не сможет понять происходящее.
                        </h4>
                    </div>
                    <div className='card border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-10 py-15 space-y-3 max-w-85'>
                        <Image src='/problem1.svg' alt="Проблема и ее решение" width={92} height={94} />
                        <h3 className='text-white font-medium text-h5'>Отсутствие актуальной информации в карточке сделки</h3>
                        <h4 className='text-white font-light text-h5'>
                            Руководитель при заходе в карточку не понимает, на какой стадии диалог с клиентом. Любой другой
                            сотрудник также, без переслушивания всех звонков из карточки, не сможет понять происходящее.
                        </h4>
                    </div>
                    <div className='card border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-10 py-15 space-y-3 max-w-85'>
                        <Image src='/problem1.svg' alt="Проблема и ее решение" width={92} height={94} />
                        <h3 className='text-white font-medium text-h5'>Отсутствие актуальной информации в карточке сделки</h3>
                        <h4 className='text-white font-light text-h5'>
                            Руководитель при заходе в карточку не понимает, на какой стадии диалог с клиентом. Любой другой
                            сотрудник также, без переслушивания всех звонков из карточки, не сможет понять происходящее.
                        </h4>
                    </div>
                </div>

                <TitleArrow
                    text='Как мы можем помочь?'
                    link='/'
                    variant='secondary'
                />

                <div className='flex flex-wrap gap-3'>
                    <div className="flex items-center justify-center flex-col text-center bg-transparent border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-20 py-15 space-y-3 h-[515px] w-[573px]">
                        <Image src='/help1.svg' alt="Помощь" width={230} height={230} />
                        <h4 className='text-h4 font-bold text-white'>Техническая поддержка</h4>
                    </div>
                    <div className="flex items-center justify-center flex-col text-center bg-transparent border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-20 py-15 space-y-3 h-[515px] w-[573px]">
                        <Image src='/help1.svg' alt="Помощь" width={230} height={230} />
                        <h4 className='text-h4 font-bold text-white'>Техническая поддержка</h4>
                    </div>
                    <div className="flex items-center justify-center flex-col text-center bg-transparent border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-20 py-15 space-y-3 h-[515px] w-[573px]">
                        <Image src='/help1.svg' alt="Помощь" width={230} height={230} />
                        <h4 className='text-h4 font-bold text-white'>Техническая поддержка</h4>
                    </div>
                    <div className="flex items-center justify-center flex-col text-center bg-transparent border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-20 py-15 space-y-3 h-[515px] w-[573px]">
                        <Image src='/help1.svg' alt="Помощь" width={230} height={230} />
                        <h4 className='text-h4 font-bold text-white'>Техническая поддержка</h4>
                    </div>
                    <div className="flex items-center justify-center flex-col text-center bg-transparent border-1 rounded-3xl shadow-2xl shadow-[#3760E7] px-20 py-15 space-y-3 h-[515px] w-[573px]">
                        <Image src='/help1.svg' alt="Помощь" width={230} height={230} />
                        <h4 className='text-h4 font-bold text-white'>Техническая поддержка</h4>
                    </div>
                </div>


                <h3 className='font-semibold text-h3 text-white'>Как мы работаем: четко и по Scrum</h3>
                <h4 className='font-semibold text-h4 text-white'>
                    Мы используем гибкую методологию <span className='font-bold text-h3'>Scrum</span>, чтобы ваше сопровождение amoCRM было <span className='text-h3 font-bold'>эффективным и прозрачным</span>.
                </h4>
            </div>

            <StepTimeline />

            <div className='container'>
                <h4 className='text-h4 font-medium text-white space-y-20'>
                    Такой подход позволяет оперативно реагировать на изменения, соблюдать сроки и обеспечивать высокое
                    качество работы.
                </h4>

                <TitleArrow text="Тарифы" link='/' variant='secondary'/>
            </div>
        </main>
    )
}