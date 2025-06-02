import Image from "next/image";

const services = [
    {
        img: "/service1.svg",
        title: "Сбор информации",
        items: [
            "Изучаем ваш бизнес и цели.",
            "Анализируем текущие процессы и технологии.",
            "Общаемся с ключевыми сотрудниками."
        ]
    },
    {
        img: "/service2.svg",
        title: "Поиск проблем",
        items: [
            "Определяем слабые места в работе.",
            "Оцениваем риски и их влияние.",
            "Сравниваем с конкурентами."
        ]
    },
    {
        img: "/service3.svg",
        title: "Разработка решений",
        items: [
            "Готовим техническое задание (ТЗ).",
            "Предлагаем оптимизации.",
            "Устанавливаем ключевые показатели успеха."
        ]
    },
    {
        img: "/service4.svg",
        title: "План действий",
        items: [
            "Создаём пошаговый план работ.",
            "Расчёт времени и бюджета.",
            "Учитываем особенности вашего бизнеса."
        ]
    }
];

export default function AnalyticsResult() {
    return (
        <>
            <ul className='bg-black rounded-4xl grid grid-cols-2 gap-20 py-20 px-53'>
                {services.map((service, idx) => (
                    <li key={idx} className='flex items-end justify-center gap-12'>
                        <Image src={service.img} alt={service.title} width={80} height={80} />
                        <div className='contenet space-y-5'>
                            <h4 className='font-semibold text-h5 text-white'>{service.title}</h4>
                            <ul className='list-disc text-white'>
                                {service.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
