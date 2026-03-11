import Image from "next/image";
import React from "react";
import { Card } from "@/shared/ui/Card/Card";
import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import WhyChooseUsSlideIn from "./WhyChooseUsSlideIn.client";

const WhyChooseUs = () => {
    return (
        <div className="sm:mt-20 mt-10">
            <div className="sm:text-center mx-auto w-full max-w-[1200px] px-4 overflow-hidden">
                <div className="sm:hidden">
                    <TitleArrow text="Почему выбирают нас?" className="mb-6" />
                </div>

                <h2 className="hidden sm:block font-bold text-h2 mb-6">
                    Почему выбирают нас?
                </h2>

                <div className="mx-auto max-w-3xl px-4 sm:mb-20">
                    <p className="sm:text-h5 text-[14px] font-normal">
                        Автоматизация становится умнее с каждым днем —{" "}
                        <span className="sm:font-medium sm:text-h4">Мы</span>{" "}
                        внедряем самые актуальные инструменты, чтобы{" "}
                        <span className="sm:font-medium sm:text-h4">Вы</span>{" "}
                        оставались впереди конкурентов.
                    </p>
                </div>
            </div>

            <div className="sm:hidden w-full overflow-hidden h-[200px] relative flex items-center justify-center">
                <div className="h-[40px] w-[1000px] absolute bg-[#3760E7] text-center rotate-z-[-6.29deg] flex items-center gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-white text-[24px] font-semibold">AMO</span>
                            <span className="text-white text-[24px] font-semibold">CRM</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="sm:mb-12 mb-5 relative sm:h-[310px] overflow-hidden">
                <div className="flex sm:flex-row flex-col gap-20 mx-auto w-full max-w-[1200px] px-4 h-full">
                    <div className="flex sm:flex-row flex-col gap-5 items-center">
                        <Card
                            title="Опыт"
                            content={
                                <p className="sm:font-base sm:text-base text-[24px] my-[40px]">
                                    Более{" "}
                                    <span className="text-blue text-6xl sm:font-normal font-bold">
                                        100
                                    </span>{" "}
                                    успешных проектов
                                </p>
                            }
                        />
                        <Card
                            title="Прозрачность"
                            content={
                                <p className="sm:font-base sm:text-base text-[24px] my-[40px]">
                                    Вы всегда в курсе, что мы делаем.
                                </p>
                            }
                        />

                        <div className="hidden sm:block h-full w-[1000px] relative flex-shrink-0" style={{ minWidth: "600px", maxWidth: "1000px" }}>
                            <WhyChooseUsSlideIn direction="right">
                                <Image
                                    src="/decor/amo.svg"
                                    alt="amo"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            </WhyChooseUsSlideIn>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative sm:h-[310px] overflow-hidden">
                <div className="flex sm:flex-row flex-col justify-end gap-5 mx-auto w-full max-w-[1200px] px-4 h-full">
                    <div className="flex sm:flex-row flex-col gap-5 items-center">
                        <div className="hidden sm:block h-full w-[1000px] relative flex-shrink-0" style={{ minWidth: "600px" }}>
                            <WhyChooseUsSlideIn direction="left">
                                <Image
                                    src="/decor/crm.svg"
                                    alt="crm"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            </WhyChooseUsSlideIn>
                        </div>

                        <Card
                            title="Современные технологии"
                            content={
                                <p className="sm:font-base sm:text-base text-[24px] my-[40px]">
                                    Используем лучшие инструменты и методы.
                                </p>
                            }
                        />
                        <Card
                            title="Индивидуальный подход"
                            content={
                                <p className="sm:font-base sm:text-base text-[24px] my-[40px]">
                                    Каждое решение подстроено под вас.
                                </p>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
