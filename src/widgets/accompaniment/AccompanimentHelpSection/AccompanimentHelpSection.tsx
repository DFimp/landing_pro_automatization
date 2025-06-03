import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import HelpServices from "@/widgets/accompaniment/AccompanimentHelpSection/ui/HelpServices";

export function AccompanimentHelpSection() {
    return (
        <div className='flex flex-col gap-20'>
            <TitleArrow
                className='mt-40 mb-20'
                text='Как мы можем помочь?'
                link='/'
                variant='secondary'
            />
            <HelpServices />
        </div>
    );
}
