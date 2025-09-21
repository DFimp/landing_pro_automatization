"use client"

import * as motion from "motion/react-client";
import Image from "next/image";
import { AnimatedListItemProps } from "@/shared/ui/animatedListItem/models";
import { isMobile } from "@/shared/utils/isMobile";

export const AnimatedListItem = ({
                                     index,
                                     left,
                                     imageSrc,
                                     title,
                                     description,
                                     number,
                                     descriptionClassName = "",
                                     className = "",
                                     children,
                                     oneLevel = true,
                                 }: AnimatedListItemProps) => {
    const isLeft = left ?? index % 2 === 0;

    const initialX = isLeft ? -100 : 160;
    const targetX = oneLevel ? 0 : (isLeft ? 0 : 150);

    return (
        <motion.li
            key={index}
            initial={{
                x: isMobile() ? 0 : initialX,
                opacity: isMobile() ? 1 : 0,
            }}
            whileInView={{
                x: isMobile() ? 0 : targetX,
                opacity: 1,
            }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true, amount: oneLevel ? 0.8 : 1 }}
            className={`flex items-center gap-4 ${className} ${
                isLeft ? "rounded-r-full" : "rounded-l-full"
            }`}
        >
            {number && (
                <h2 className="text-blue font-bold" style={{ fontSize: isMobile() ? "24px" : "64px" }}>
                    {number}
                </h2>
            )}

            {imageSrc && <Image src={imageSrc} alt={title} width={150} height={150} />}

            <div className="content">
                <h3 className="font-semibold sm:text-h4">{title}</h3>
                {description && (
                    <p className={`font-normal sm:text-h7 ${descriptionClassName}`}>
                        {description}
                    </p>
                )}
                {children}
            </div>
        </motion.li>
    );
};
