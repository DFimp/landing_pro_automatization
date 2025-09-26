'use client'

import Button from "@/shared/ui/button/Button";
import { Tariff } from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/models";
import {tariffs} from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/lib";
import * as motion from "motion/react-client"
import Image from "next/image";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function Tariffs() {
    const { isMobileView } = detectMobile()
    return (
        <section className='container'>
            <ul className='flex sm:flex-row flex-col justify-between items-center gap-8'>
                {tariffs.map((tariff: Tariff, index: number) => (
                    <motion.li
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        style={ isMobileView ? { boxShadow: '0 4px 13px #3760E780'} : { borderColor: "#3760E7" }}
                        key={index}
                        className='card sm:border-1 shadow-[0_4px_13px_#3760E780] sm:rounded-3xl rounded-[60px] px-10 py-15 sm:max-w-85 w-full space-y-10 relative overflow-hidden bg-black' // Добавлено overflow-hidden
                    >
                        {index === 0 && (
                            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                                <Image
                                    src="/ribbon.svg"
                                    alt='Выгода'
                                    width={1000}
                                    height={1000}
                                    className="object-cover absolute top-0 right-0"
                                />
                            </div>
                        )}

                        <div className="relative z-10 space-y-10"> {/* Добавлен контейнер с z-10 */}
                            <h3 className='text-white font-semibold text-h4'>{tariff.title}</h3>
                            <ul className={`list-disc text-white font-normal sm:text-h5 text-[14px] flex flex-col gap-5 pl-4`}>
                                {tariff.features.map((feature: string, i: number) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <h4 className='text-white font-semibold text-h4'>{tariff.price}</h4>
                            <Button
                                className="z-10 relative hover:!text-white !text-black sm:w-auto w-full"
                                text="Купить"
                                variant="outline"
                            />
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}