"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/shared/ui/button/Button";
import ConsultationModal from "@/features/consultation/ConsultationModal";
import { Tariff } from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/models";
import TariffItemMotion from "./TariffItemMotion.client";

export default function TariffsClient({ tariffs }: { tariffs: Tariff[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTariff, setSelectedTariff] = useState<string>("");

    const handleTariffClick = (tariffTitle: string) => {
        setSelectedTariff(tariffTitle);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTariff("");
    };

    return (
        <>
            <section className="mx-auto w-full max-w-[1200px] px-4">
                <ul className="flex sm:flex-row flex-col justify-between items-center gap-8">
                    {tariffs.map((tariff, index) => (
                        <TariffItemMotion key={tariff.title} index={index}>
                            <li
                                className="cursor-pointer card sm:border-1 sm:border-[#3760E7] shadow-[0_4px_13px_#3760E780] sm:rounded-3xl rounded-[60px] px-10 py-15 sm:max-w-85 w-full space-y-10 relative overflow-hidden bg-black"
                                onClick={() => handleTariffClick(tariff.title)}
                            >
                                {index === 0 && (
                                    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                                        <Image
                                            src="/services/Escort/ribbon.svg"
                                            alt="выгода"
                                            width={1000}
                                            height={1000}
                                            className="object-cover absolute top-0 right-0"
                                        />
                                    </div>
                                )}

                                <div className="relative z-10 space-y-10">
                                    <h3 className="text-white font-semibold text-h4">{tariff.title}</h3>

                                    <ul className="list-disc text-white font-normal sm:text-h5 text-[14px] flex flex-col gap-5 pl-4">
                                        {tariff.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    <h4 className="text-white font-semibold text-h4">{tariff.price}</h4>

                                    <Button
                                        className="z-10 relative hover:!text-white !text-black sm:w-auto w-full"
                                        text="Купить"
                                        variant="outline"
                                    />
                                </div>
                            </li>
                        </TariffItemMotion>
                    ))}
                </ul>
            </section>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                selectedTariff={selectedTariff}
            />
        </>
    );
}
