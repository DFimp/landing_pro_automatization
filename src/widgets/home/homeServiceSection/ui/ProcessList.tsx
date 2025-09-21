import { solutions } from "@/widgets/home/homeServiceSection/ui/lib";
import {AnimatedListItem} from "@/shared/ui/animatedListItem/AnimatedListItem";
import { isMobile } from "@/shared/utils/isMobile";
import { Card } from "@/shared/ui/Card/Card";
import Image from "next/image";
const ProcessList = () => {
    return (
        <section className="process-list">
            {
                !isMobile()
                ? (
                    <div className='process-list__container container'>
                        <ul className='space-y-4'>
                            {solutions.map((solution, index) => (
                                <AnimatedListItem
                                    oneLevel={false}
                                    key={index}
                                    index={index}
                                    imageSrc={solution.imageSrc}
                                    title={solution.title}
                                    description={solution.description}
                                    descriptionClassName={solution.descriptionClassname}
                                />
                            ))}
                        </ul>
                    </div>
                )
                : (
                    <div>
                    {solutions.map((solution, index) => (
                    <div className="my-5 px-6 py-8 flex flex-col gap-3 rounded-[64px] shadow-lg/50 shadow-blue-500/50 items-center">
                        <Image
                            src={solution.imageSrc}
                            alt="Кнопка"
                            width={72}
                            height={72}
                        />
                        <h3 className="font-semibold">
                            {solution.title}
                        </h3>
                        <p>
                            {solution.description}
                        </p>
                    </div>
                    
                    ))} </div>
                )
            }
            
        </section>
    );
};

export default ProcessList;