import Button from "@/shared/ui/button/Button";
import Image from "next/image";
import "./card.css";


const Card = () => {
    return (
        <div id='card rounded-2xl'>
            <div className="card__container container rounded-4xl relative">
                <div className='card__content p-10 space-y-15 rounded-4xl'>
                    <h2 className='text-h2 font-semibold text-white w-190'>
                        Освободим ваше время, за счет автоматизации процессов и аналитики
                    </h2>

                    <p className='text-h5  font-medium text-white max-w-150'>
                        Возьмем на себя рутину, проконтролируем менеджеров и предоставим отчеты для стратегических решений
                    </p>

                    <div className='btn__container mt-4 w-70'>
                        <Button text="Консультация" variant={"outline"} />
                    </div>
                </div>
                <Image
                    className="absolute bottom-[-50] right-[-45] z-3"
                    src="/phoneBigbg.svg"
                    alt='card phone'
                    width={218}
                    height={318}
                />
                <Image
                    className="absolute bottom-[-40] right-[-38] z-4"
                    src="/phoneBig.svg"
                    alt='card phone'
                    width={205}
                    height={296}
                />
                <Image
                    className="absolute bottom-0 right-23 z-2"
                    src='/phoneMedium.svg'
                    alt='card phone'
                    width={206}
                    height={222}
                />
                <Image
                    className="absolute bottom-0 right-70 z-1"
                    src='/phoneSmall.svg'
                    alt='card phone'
                    width={192}
                    height={179}
                />
            </div>
        </div>
    )
}

export default Card;