'use client'

import Image from "next/image";
import * as motion from "motion/react-client"
import {services} from "@/widgets/analytic/analyticsResultSection/ui/lib";

export default function AnalyticsResult() {
    return (
        <div className='bg-black rounded-4xl py-20 px-53'>
            <ul className='container grid grid-cols-2 gap-20'>
                {services.map((service, index) => (
                    <motion.li
                        key={index}
                        className='flex items-start gap-12 min-h-[200px]'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                    >
                        <div className="flex-shrink-0">
                            <Image
                                src={service.img}
                                alt={service.title}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <div className='space-y-5'>
                            <h4 className='font-semibold text-h5 text-white'>{service.title}</h4>
                            <ul className='list-disc text-white pl-4 space-y-2'>
                                {service.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}