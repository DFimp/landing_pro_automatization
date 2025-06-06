import Image from "next/image";
import { problems } from "@/widgets/accompaniment/AccompanimentProblemsSection/ui/lib";
import * as motion from "motion/react-client";

export default function ProblemsGrid() {
    return (
        <div className='problems-grid container'>
            <ul className='flex flex-wrap justify-center gap-10'>
                {problems.map((problem, index) => (
                    <motion.li
                        style={{boxShadow: `0 0 15px rgba(55, 96, 231, 0.5)`}}
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="card border-1 rounded-3xl px-10 py-15 space-y-3 max-w-90 h-[650px]"
                    >
                        <Image src={problem.image} alt="Проблема и ее решение" width={92} height={94} />
                        <h3 className="text-white font-medium text-h5">{problem.title}</h3>
                        <h4 className="text-white font-light text-h5">{problem.description}</h4>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
