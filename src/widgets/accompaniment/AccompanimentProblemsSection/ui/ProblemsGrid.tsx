"use client"

import Image from "next/image";
import { problems } from "@/widgets/accompaniment/AccompanimentProblemsSection/ui/lib";
import * as motion from "motion/react-client";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function ProblemsGrid() {
    const { isMobileView } = detectMobile()
    return (
        <div className='problems-grid container'>
            <ul className='flex flex-wrap justify-center gap-10'>
                {problems.map((problem, index) => (
                    <motion.li
                        style={{
                            boxShadow: `0 0 15px rgba(55, 96, 231, 0.5)`,
                            background: 'rgba(0, 0, 0, 0.3)'
                        }}
                        key={index + Number(isMobileView) * 100}
                        initial={{ opacity: isMobileView ? 1 : 0, y: isMobileView ? 0 : 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="card rounded-[60px] px-10 sm:py-15 py-10 space-y-3 sm:max-w-90 sm:h-[650px]"
                    >
                        <Image src={problem.image} alt="Проблема и ее решение" width={isMobileView ? 46 : 92} height={isMobileView ? 46 : 92} />
                        <h3 className="text-white font-medium sm:text-h5 text-[14px]">{problem.title}</h3>
                        <h4 className="text-white font-light sm:text-h5 text-[14px]">{problem.description}</h4>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
