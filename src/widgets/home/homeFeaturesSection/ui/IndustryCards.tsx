"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function IndustryCards() {
const { isMobileView } = detectMobile()
const prefix = isMobileView ? "m_" : ""
const cards = [
    { path: `/${prefix}продажи.svg`, alt: "Продажи" },
    { path: `/${prefix}маркетинг.svg`, alt: "Маркетинг" },
    { path: `/${prefix}услуги.svg`, alt: "Услуги" },
    { path: `/${prefix}финансы.svg`, alt: "Финансы" },
    { path: `/${prefix}туризм.svg`, alt: "Туризм" },
    { path: `/${prefix}мед.svg`, alt: "Медицина" },
    { path: `/${prefix}недвижимость.svg`, alt: "Недвижимость" },
    { path: `/${prefix}обслуживание.svg`, alt: "Обслуживание" },
    { path: `/${prefix}аналитика.svg`, alt: "Аналитика" },
    { path: `/${prefix}производственные.svg`, alt: "Производственные" },
];

const firstRow = cards.slice(0, 5);
const secondRow = cards.slice(5, 10);

    return (
        <div className="space-y-6">
            {[firstRow, secondRow].map((row, rowIndex) => (
                <motion.ul
                    key={rowIndex + Number(isMobileView) * 100}
                    className="sm:grid sm:grid-cols-5 flex flex-col gap-4"
                    style={{
                        marginBottom: 'calc(var(--spacing) * 4)'
                    }}
                    initial={{ opacity: isMobileView ? 1 : 0, y: isMobileView ? 0 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.6, delay: rowIndex * 0.3 }}
                >
                    {row.map((card, index) => (
                        <li key={index + Number(isMobileView) * 100}>
                            <Image src={card.path} alt={card.alt} width={isMobileView ? 600 : 218} height={214} />
                        </li>
                    ))}
                </motion.ul>
            ))}
        </div>
    );
}
