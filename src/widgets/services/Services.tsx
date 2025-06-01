import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ServicesProps = {
    text: string;
    variant?: "primary" | "secondary" | "outline";
    link: string;
};

export const Services: FC<ServicesProps> = ({
                                                text,
                                                variant = 'primary',
                                                link
                                            }) => {
    // Определяем путь к изображению в зависимости от варианта
    const getArrowSrc = () => {
        switch (variant) {
            case 'primary':
                return "/arrow.svg";
            case 'secondary':
                return "/arrow_white.svg";
            case 'outline':
                return "/big arrow.svg";
            default:
                return "/arrow.svg";
        }
    };

    // Определяем размеры изображения в зависимости от варианта
    const getArrowDimensions = () => {
        return variant === 'outline'
            ? { width: 1323, height: 30 }
            : { width: 114, height: 30 };
    };

    const arrowSrc = getArrowSrc();
    const arrowDimensions = getArrowDimensions();

    return (
        <section className='services'>
            <div className={`services__container container flex justify-between items-center ${variant === "outline" ? 'relative' : ""}`}>
                <h2 className={`text-h3 font-semibold ${
                    variant === 'secondary' ? 'text-white' : ''
                }`}>
                    {text}
                </h2>

                <Link href={link} passHref className={variant === 'outline' ? "absolute -left-45 top-15" : ""}>
                    <Image
                        src={arrowSrc}
                        alt="Стрелочка перехода"
                        width={arrowDimensions.width}
                        height={arrowDimensions.height}
                    />
                </Link>
            </div>
        </section>
    );
};