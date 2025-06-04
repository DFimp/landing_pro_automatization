import { data } from "@/widgets/analytic/analyticsDeliverablesSection/ui/lib";
import {AnimatedListItem} from "@/shared/ui/animatedListItem/AnimatedListItem";


export const AnimatedResultsList = () => {
    return (
        <ul className="space-y-10 mt-10">
            {data.map((item, i) => (
                <AnimatedListItem
                    key={i}
                    index={i}
                    title={item.title}
                    description={item.text}
                    number={i + 1}
                    className={`bg-[#EBF0FD] py-4 ${
                        i % 2 === 0
                            ? 'rounded-r-full px-66 mr-[185px]'
                            : 'rounded-l-full ml-[175px] px-22'
                    }`}
                />
            ))}
        </ul>
    );
};