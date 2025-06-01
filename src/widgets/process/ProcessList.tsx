import {ProcessItem} from "@/widgets/process/ui/ProcessItem";


const ProcessList = () => {
    return(
        <section className="process-list">
            <div className='process-list__container container'>
                <ul className='space-y-4'>
                    <ProcessItem
                        direction="left"
                        imageSrc="/process1.svg"
                        title="Полный цикл внедрения amoCRM"
                        description="Мы запускаем CRM с нуля: изучаем ваши задачи и цели и настраиваем амо под особенности вашего бизнеса."
                    />

                    <ProcessItem
                        direction="right"
                        imageSrc="/process2.svg"
                        title="Аналитика и отчеты для управления бизнесом"
                        description="Настраиваем аналитику в amoCRM, чтобы вы могли отслеживать ключевые показатели и принимать обоснованные решения."
                        offset="ml-[250px]"
                    />

                    <ProcessItem
                        direction="left"
                        imageSrc="/process3.svg"
                        title="Сопровождение и развитие системы"
                        description="Мы не просто поддерживаем amoCRM, но и развиваем её,
                                  добавляя новые возможности и адаптируя под ваши задачи."
                    />

                    <ProcessItem
                        direction="right"
                        imageSrc="/process4.svg"
                        title="Интеграция amoCRM с любыми необходимыми сервисами"
                        description="Соединяем amoCRM с почтовыми сервисами, мессенджерами,
                                  телефонией, бухгалтерией и другими платформами, чтобы упростить вашу работу и объединить
                                  все инструменты в единую систему."
                        offset="ml-[250px]"
                    />

                    <ProcessItem
                        direction="left"
                        imageSrc="/process5.svg"
                        title="Подключение и настройка виджетов для amoCRM"
                        description="Сокращаем рутину, оптимизируем процессы, при помощи
                                  готовых виджетов."
                    />
                </ul>
            </div>
        </section>
    )
}

export default ProcessList;