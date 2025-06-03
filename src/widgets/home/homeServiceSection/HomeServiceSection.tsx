import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import ProcessList from "@/widgets/home/homeServiceSection/ui/ProcessList";

export function HomeServicesSection() {
    return (
        <section className='flex flex-col gap-20'>
            <TitleArrow
                text="Чем мы можем помочь вашему бизнесу"
                link="/"
            />
            <ProcessList />
        </section>
    );
}
