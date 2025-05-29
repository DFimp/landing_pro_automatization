import Image from "next/image";
import HeaderNav from "@/widgets/header/ui/HeaderNav";
import Button from "@/shared/ui/button/Button";

const Header = () => {
    return (
        <header id='header' className='mt-2.5'>
            <div className='header__container container flex justify-between items-center'>
                <div className='header__logo'>
                    <Image
                        className="cursor-pointer"
                        src="/logo.svg"
                        alt="Логотип комании"
                        width={260}
                        height={80}
                    />
                </div>

                <div className='flex items-center gap-5'>
                    <HeaderNav />

                    <div className='w-30'>
                        <Button text='Консультация'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;