import { solutions } from "@/widgets/home/homeServiceSection/ui/lib";
import {AnimatedListItem} from "@/shared/ui/animatedListItem/AnimatedListItem";


const ProcessList = () => {
    return (
        <section className="process-list">
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
        </section>
    );
};

export default ProcessList;