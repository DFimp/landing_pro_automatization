import Button from "@/shared/ui/button/Button";
import { Tariff } from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/models";
import {tariffs} from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/lib";
import * as motion from "motion/react-client"
import Image from "next/image";

export default function Tariffs() {
    return (
        <section className='container'>
            <ul className='flex justify-between items-center gap-8'>
                {tariffs.map((tariff: Tariff, index: number) => (
                    <motion.li
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        style={{ borderColor: "#3760E7" }}
                        key={index}
                        className='card border-1 rounded-3xl px-10 py-15 max-w-85 space-y-10 relative overflow-hidden' // Добавлено overflow-hidden
                    >
                        {index === 0 && (
                            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                                <Image
                                    src="/ribbon.svg"
                                    alt='Выгода'
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="relative z-10 space-y-10"> {/* Добавлен контейнер с z-10 */}
                            <h3 className='text-white font-semibold text-h4'>{tariff.title}</h3>
                            <ul className='list-disc text-white font-normal text-h5'>
                                {tariff.features.map((feature: string, i: number) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <h4 className='text-white font-semibold text-h4'>{tariff.price}</h4>
                            <Button
                                className="z-10 relative hover:!text-white !text-black"
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