import * as motion from "motion/react-client"
import Image from "next/image";
import {AnimatedListItemProps} from "@/shared/ui/animatedListItem/models";


export const AnimatedListItem = ({
                                     index,
                                     left,
                                     imageSrc,
                                     title,
                                     description,
                                     number,
                                     descriptionClassName = "",
                                     className = "",
                                     children
                                 }: AnimatedListItemProps) => {
    const isLeft = left ?? index % 2 === 0;

    return (
        <motion.li
            key={index}
            initial={{
                x: isLeft ? -50 : 200,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.8 }}
            className={`flex items-center gap-4 ${className} ${
                isLeft ? 'rounded-r-full' : 'rounded-l-full'
            }`}
        >
            {number && (
                <h2 className="text-blue font-bold" style={{ fontSize: '64px' }}>
                    {number}
                </h2>
            )}

            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={title}
                    width={150}
                    height={150}
                />
            )}

            <div className="content">
                <h3 className="font-semibold text-h4">{title}</h3>
                {description && (
                    <p className={`font-normal text-h7 ${descriptionClassName}`}>
                        {description}
                    </p>
                )}
                {children}
            </div>
        </motion.li>
    );
};