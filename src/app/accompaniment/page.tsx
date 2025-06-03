import StickyInfo from "@/shared/ui/stickyInfo/StickyInfo";
import {TitleArrow} from "@/shared/ui/titleArrow/TitleArrow";
import ProblemsGrid from "@/widgets/ProblemsGrid/ProblemsGrid";
import StepTimeline from "@/widgets/StepTimeline/StepTimeline";
import Tariffs from "@/widgets/tarrifs/Tarrifs";
import HelpServices from "@/widgets/helpServices/HelpServices";
import "./style.css"

export default function Accompaniment() {
    return (
        <main id="accompaniment" className="accompaniment pb-25 pt-15 overflow-hidden space-y-20">
            <div className='accompaniment__container container space-y-20'>
                <div className='space-y-10'>
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
                    text='CRM — это основа вашего бизнеса. Любые сбои в её работе напрямую влияют на его эффективность. '
                    left={false}
                />
            </div>


           <div className='container'>
               <TitleArrow
                   className='mt-40 mb-20'
                   text='Вот часть распространенных проблем, которые влияют на качество работы с клиентами'
                   link='/'
                   variant='secondary'
               />

                <ProblemsGrid />
            </div>

            <div className='container'>
                <TitleArrow
                    className='mt-40 mb-20'
                    text='Как мы можем помочь?'
                    link='/'
                    variant='secondary'
                />

                <HelpServices />
            </div>

            <div className="container">
                <h3 className='font-semibold text-h3 text-white'>Как мы работаем: четко и по Scrum</h3>
                <h4 className='font-semibold text-h4 text-white mb-20'>
                    Мы используем гибкую методологию <span className='font-bold text-h3'>Scrum</span>, чтобы ваше сопровождение amoCRM было <span className='text-h3 font-bold'>эффективным и прозрачным</span>.
                </h4>
            </div>

            <StepTimeline />

            <div className='container'>
                <h4 className='text-h4 font-medium text-white space-y-20'>
                    Такой подход позволяет оперативно реагировать на изменения, соблюдать сроки и обеспечивать высокое
                    качество работы.
                </h4>

                <TitleArrow
                    className='mt-20 mb-20'
                    text="Тарифы" link='/'
                    variant='secondary'/>
                <Tariffs />
            </div>
        </main>
    )
}