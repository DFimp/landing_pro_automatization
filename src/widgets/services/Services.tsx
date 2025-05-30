import Image from "next/image";

export const Services = () => {
    return (
        <div className='services'>
            <div className='services__container container flex justify-between items-center pb-20'>
                <h2 className="text-h3 font-semibold">Чем мы можем помочь вашему бизнесу</h2>
                <Image
                    src='/arrow.svg'
                    alt="Стрелочка перехода"
                    width={114}
                    height={30}
                />
            </div>
        </div>
    );
};