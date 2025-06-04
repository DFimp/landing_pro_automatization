import WhyChooseUs from "@/widgets/analytic/analyticsFinalSection/ui/WhyChooseUs";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";

export function AnalyticsFinalSection() {
    return (
        <section className='flex flex-col gap-20'>
            <WhyChooseUs />
            <div className='container'>
                <ConsultCard />
            </div>
        </section>
    );
}
