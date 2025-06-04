import {steps} from "@/widgets/analytic/analyticsStepsSection/ui/lib";
import * as motion from "motion/react-client"


export default function AnalyticsSteps() {
    return (
        <ul>
            {steps.map((step, index) => (
                <motion.li
                    key={index}
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 40 + 200 * index, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="mb-5"
                >
                    <div className='flex items-center gap-5'>
                        <h2 className='text-blue font-semibold' style={{ fontSize: '64px' }}>{index + 1}</h2>
                        <div className='w-full'>
                            <h4 className="font-medium text-h4 mb-1">{step.title}</h4>
                            <p className="font-normal text-h5">{step.text}</p>
                        </div>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
}
