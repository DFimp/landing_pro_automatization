"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
    { path: "/продажи.svg", alt: "Продажи" },
    { path: "/маркетинг.svg", alt: "Маркетинг" },
    { path: "/услуги.svg", alt: "Услуги" },
    { path: "/финансы.svg", alt: "Финансы" },
    { path: "/туризм.svg", alt: "Туризм" },
    { path: "/мед.svg", alt: "Медицина" },
    { path: "/недвижимость.svg", alt: "Недвижимость" },
    { path: "/Обслуживание.svg", alt: "Обслуживание" },
    { path: "/аналитика.svg", alt: "Аналитика" },
    { path: "/производственные.svg", alt: "Производственные" },
];

const firstRow = cards.slice(0, 5);
const secondRow = cards.slice(5, 10);

export default function IndustryCards() {
    return (
        <div className="space-y-6">
            {[firstRow, secondRow].map((row, rowIndex) => (
                <motion.ul
                    key={rowIndex}
                    className="grid grid-cols-5 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: rowIndex * 0.3 }}
                >
                    {row.map((card, index) => (
                        <li key={index}>
                            <Image src={card.path} alt={card.alt} width={218} height={214} />
                        </li>
                    ))}
                </motion.ul>
            ))}
        </div>
    );
}
