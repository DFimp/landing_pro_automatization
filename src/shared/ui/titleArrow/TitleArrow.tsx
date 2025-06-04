import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {TittleArrowProps} from "@/shared/ui/titleArrow/models";



export const TitleArrow: FC<TittleArrowProps> = ({
                                                  text,
                                                  variant = 'primary',
                                                  link,
                                                  className = ""
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
        <div className={`${className}`}>
            <div className={`tittleArrow ${variant !== "outline" && "container"} ${className}`}>
                <div className={`tittleArrow__container flex justify-between items-center ${variant === "outline" ? 'relative' : ""}`}>
                    <h2 className={`text-h4 font-semibold
                    ${variant === "outline" && "container"} 
                    ${variant === 'secondary' ? 'text-white' : ''
                    }`}>
                        {text}
                    </h2>

                    <Link href={link} passHref className={variant === 'outline' ? "absolute left-0 top-15" : ""}>
                        <Image
                            src={arrowSrc}
                            alt="Стрелочка перехода"
                            width={arrowDimensions.width}
                            height={arrowDimensions.height}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};