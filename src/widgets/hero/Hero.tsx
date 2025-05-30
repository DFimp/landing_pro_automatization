import Button from "@/shared/ui/button/Button";
import Image from "next/image";

const Hero = () => {
    return(
        <div className="hero">
            <div className='hero__container container flex justify-between items-center'>
                <div className="space-y-9">
                    <h2 className='text-h3 font-semibold'>
                        Ваш эксперт по amoCRM
                    </h2>

                    <h2 className='text-h3 font-regular max-w-140'>
                        от консультации в решении простых задач до полной автоматизации бизнес-процессов.
                    </h2>
                    <div className='w-90'>
                        <Button text="Консультация" variant='secondary' />
                    </div>
                </div>

                <Image
                    src='/laptop.svg'
                    alt='Laptop'
                    width={580}
                    height={464}
                />
            </div>
        </div>
    )
}

export default Hero;