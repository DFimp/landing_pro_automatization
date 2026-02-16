import Image from "next/image";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export default function IndustryCards() {
    const cards = [
        {
            desktopPath: "/services/ImplementationFromScratch/продажи.svg",
            mobilePath: "/services/ImplementationFromScratch/m_продажи.svg",
            alt: "Продажи",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/маркетинг.svg",
            mobilePath: "/services/ImplementationFromScratch/m_маркетинг.svg",
            alt: "Маркетинг",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/услуги.svg",
            mobilePath: "/services/ImplementationFromScratch/m_услуги.svg",
            alt: "Услуги",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/финансы.svg",
            mobilePath: "/services/ImplementationFromScratch/m_финансы.svg",
            alt: "Финансы",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/туризм.svg",
            mobilePath: "/services/ImplementationFromScratch/m_туризм.svg",
            alt: "Туризм",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/мед.svg",
            mobilePath: "/services/ImplementationFromScratch/m_мед.svg",
            alt: "Медицина",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/недвижимость.svg",
            mobilePath: "/services/ImplementationFromScratch/m_недвижимость.svg",
            alt: "Недвижимость",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/обслуживание.svg",
            mobilePath: "/services/ImplementationFromScratch/m_обслуживание.svg",
            alt: "Обслуживание",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/аналитика.svg",
            mobilePath: "/services/ImplementationFromScratch/m_аналитика.svg",
            alt: "Аналитика",
        },
        {
            desktopPath: "/services/ImplementationFromScratch/производственные.svg",
            mobilePath: "/services/ImplementationFromScratch/m_производственные.svg",
            alt: "Производственные",
        },
    ];

    const firstRow = cards.slice(0, 5);
    const secondRow = cards.slice(5, 10);

    return (
        <div className="space-y-6">
            {[firstRow, secondRow].map((row, rowIndex) => (
                <ScrollReveal
                    as="ul"
                    key={rowIndex}
                    className="sm:grid sm:grid-cols-5 flex flex-col gap-4"
                    staggerChildren
                    staggerMs={70}
                    yFrom={18}
                    scaleFrom={0.985}
                    blurPx={0}
                    durationMs={650}
                    delayMs={rowIndex * 120}
                >
                    {row.map((card, index) => (
                        <li
                            key={card.alt}
                            data-sr-item
                            style={{ ["--i" as any]: index }}
                        >
                            <Image
                                src={card.mobilePath}
                                alt={card.alt}
                                width={600}
                                height={214}
                                className="block sm:hidden"
                            />
                            <Image
                                src={card.desktopPath}
                                alt={card.alt}
                                width={218}
                                height={214}
                                className="hidden sm:block"
                            />
                        </li>
                    ))}
                </ScrollReveal>
            ))}
        </div>
    );
}
