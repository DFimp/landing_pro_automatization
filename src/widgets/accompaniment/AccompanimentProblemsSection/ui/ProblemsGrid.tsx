'use client'

import Image from "next/image";
import { problems } from "@/widgets/accompaniment/AccompanimentProblemsSection/ui/lib";


export default function ProblemsGrid() {
    return (
        <div className='problems-grid container'>
            <ul className='flex flex-wrap justify-center gap-10'>
                {problems.map((problem, index) => (
                    <li
                        key={index}
                        style={{borderColor: "#3760E7"}}
                        className="card border-1 rounded-3xl px-10 py-15 space-y-3 max-w-90 h-[600px]"
                    >
                        <Image src={problem.image} alt="Проблема и ее решение" width={92} height={94} />
                        <h3 className="text-white font-medium text-h5">{problem.title}</h3>
                        <h4 className="text-white font-light text-h5">{problem.description}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}
