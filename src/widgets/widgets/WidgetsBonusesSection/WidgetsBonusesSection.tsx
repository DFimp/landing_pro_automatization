import { BonusesList } from "./ui/BonusesList";

export function WidgetsBonusesSection() {
    return (
        <div className="bg-[url(/widgets_background.png)] sm:h-[1106px] h-[1300px] bg-cover">
        <div className='sm:pt-[40px]! pt-[18px]! container'>
            <h1 className="text-white sm:text-[48px] text-[20px] font-bold sm:mb-[40px] mb-[20px]">
            Лицензии amoCRM c <span className="sm:inline block"> бонусами </span>
            </h1>
            <p className="text-white sm:text-[20px] text-[14px] font-normal ">
                Выбирая “Про Автоматизацию” <span className="sm:inline block"> для продления лицензий, вы получаете</span> не только продукт, но и особые <span className="inline sm:block"> бонусы для <span className="sm:inline block"> вашего бизнеса: </span></span>
            </p>
            <BonusesList></BonusesList>
        </div></div>
    );
}
