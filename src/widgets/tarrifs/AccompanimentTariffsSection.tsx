'use client'

import Button from "@/shared/ui/button/Button";
import { Tariff } from "@/widgets/tarrifs/models";
import {tariffs} from "@/widgets/tarrifs/lib";



export default function Tariffs() {

    return (
        <section className='container'>
            <ul className='flex justify-between items-center gap-8'>
                {tariffs.map((tariff: Tariff, index: number) => (
                    <li
                        key={index}
                        className='card border-1 rounded-3xl shadow-xl shadow-[#3760E7] px-10 py-15 max-w-85 space-y-10'
                    >
                        <h3 className='text-white font-semibold text-h4'>{tariff.title}</h3>
                        <ul className='list-disc text-white font-normal text-h5'>
                            {tariff.features.map((feature: string, i: number) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <h4 className='text-white font-semibold text-h4'>{tariff.price}</h4>
                        <Button text="Купить" variant='outline' />
                    </li>
                ))}
            </ul>
        </section>

    );
}
