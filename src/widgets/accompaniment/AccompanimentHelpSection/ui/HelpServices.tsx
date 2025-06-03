'use client'

import Image from "next/image";
import { useState } from "react";
import {services} from "@/widgets/accompaniment/AccompanimentHelpSection/ui/lib";


export default function HelpServices() {

    const [flippedStates, setFlippedStates] = useState<boolean[]>(
        Array(services.length).fill(false)
    );


    const handleClick = (index: number) => {
        setFlippedStates((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section className='flex flex-wrap gap-12 mb-20 container'>
            {services.map((service, index) => {

                return (
                    <ul
                        key={index}
                        onClick={() => handleClick(index)}
                        className="relative w-[550px] h-[515px] perspective cursor-pointer"
                    >
                        <li
                            className="relative w-full h-full"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Front */}
                            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center text-center bg-transparent border-1 rounded-3xl shadow-xl shadow-[#3760E7] px-20 py-15 space-y-3">
                                <Image src={service.image} alt="Помощь" width={230} height={230} />
                                <h4 className='text-h4 font-bold text-white'>{service.title}</h4>
                            </div>

                            {/* Back */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center bg-transparent border-1 rounded-3xl shadow-xl shadow-[#3760E7] px-20 py-15 space-y-3">
                                <Image src={service.backside.image} alt="Back" width={140} height={140} />
                                <h4 className='text-h5 font-normal text-white mb-10'>{service.backside.title}</h4>
                                <ul className='text-white list-disc text-left'>
                                    {service.backside.fixes.map((fix: string, i: number) => (
                                        <li key={i}>{fix}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                );
            })}
        </section>
    );
}
