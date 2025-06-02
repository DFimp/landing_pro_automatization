import Image from 'next/image';
import React from 'react';
import {Card} from "@/shared/ui/Card/Card";

const WhyChooseUs = () => {
    return (
        <section>
            <div className="text-center container">
                <h2 className='font-bold text-h2 mb-6'>Почему выбирают нас?</h2>
                <div className='mx-auto max-w-3xl px-4'> {/* Добавлен контейнер с max-width */}
                    <p className='text-h5 font-normal mb-6'>
                        Автоматизация становится умнее с каждым днем —
                        <span className='font-medium text-h4'>Мы</span> внедряем самые актуальные инструменты, чтобы
                        <span className='font-medium text-h4'> Вы</span> оставались впереди конкурентов.
                    </p>
                </div>
            </div>

            {/* Первая строка с карточками слева и AmoCRM справа */}
            <div className='mb-12 relative'>
                <div>
                    <div className='flex gap-20 container'>
                        <Card
                            title="Опыт"
                            content={
                                <p>
                                    Более <span className='text-blue text-6xl'>100</span> успешных проектов
                                </p>
                            }
                        />

                        <Card
                            title="Опыт"
                            content={
                                <p>
                                    Более <span className='text-blue text-6xl'>100</span> успешных проектов
                                </p>
                            }
                        />
                    </div>
                </div>

                <Image
                    src='/amo.svg'
                    alt="AmoCRM"
                    width={575}
                    height={310}
                    className='absolute  top-0 right-0'
                />
            </div>

            {/* Вторая строка с карточками справа и rm слева */}
            <div className='relative'>
                <div className='flex'>
                    <div className='flex justify-end gap-20 container'>
                        <Card
                            title="Опыт"
                            content={
                                <p>
                                    Более <span className='text-blue text-6xl'>100</span> успешных проектов
                                </p>
                            }
                        />

                        <Card
                            title="Опыт"
                            content={
                                <p>
                                    Более <span className='text-blue text-6xl'>100</span> успешных проектов
                                </p>
                            }
                        />
                    </div>
                </div>
                <Image
                    src='/rm.svg'
                    alt="AmoCRM"
                    width={575}
                    height={310}
                    className='absolute  top-0 left-0'
                />
            </div>
        </section>
    );
};

export default WhyChooseUs;