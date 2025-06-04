import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import Tariffs from "@/widgets/accompaniment/AccompanimentTariffsSection/ui/Tariffs";

export function AccompanimentTariffsSection() {
    return (
        <div className='flex flex-col gap-20 mt-20'>
            <TitleArrow
                text="Тарифы"
                link='/'
                variant='secondary'
            />
            <Tariffs />
        </div>
    );
}
