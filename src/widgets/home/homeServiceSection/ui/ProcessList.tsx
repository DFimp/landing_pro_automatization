import { solutions } from "@/widgets/home/homeServiceSection/ui/lib";
import {AnimatedListItem} from "@/shared/ui/animatedListItem/AnimatedListItem";


type Props = {
    descriptionClassName?: string;
};

const ProcessList = ({ descriptionClassName = "" }: Props) => {
    return (
        <section className="process-list">
            <div className='process-list__container container'>
                <ul className='space-y-4'>
                    {solutions.map((solution, index) => (
                        <AnimatedListItem
                            key={index}
                            index={index}
                            imageSrc={solution.imageSrc}
                            title={solution.title}
                            description={solution.description}
                            descriptionClassName={descriptionClassName}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProcessList;