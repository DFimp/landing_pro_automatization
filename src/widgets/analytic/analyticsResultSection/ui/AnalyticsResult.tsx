'use client'

import Image from "next/image";
import * as motion from "motion/react-client"
import {services} from "@/widgets/analytic/analyticsResultSection/ui/lib";

export default function AnalyticsResult() {
    return (
        <ul
            className='bg-black rounded-4xl grid grid-cols-2 gap-20 py-20 px-53'
        >
            {services.map((service, index) => (
                <motion.li
                    key={index}
                    className='flex items-end justify-center gap-12'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{opacity: 1, y: 30}}
                    viewport={{once: true, amount: 0.6}}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                    <Image src={service.img} alt={service.title} width={80} height={80} />
                    <div className='contenet space-y-5'>
                        <h4 className='font-semibold text-h5 text-white'>{service.title}</h4>
                        <ul className='list-disc text-white pl-4'>
                            {service.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
}
