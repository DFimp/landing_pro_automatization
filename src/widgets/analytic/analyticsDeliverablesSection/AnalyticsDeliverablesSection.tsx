import { TitleArrow } from "@/shared/ui/titleArrow/TitleArrow";
import { AnimatedResultsList } from "@/widgets/analytic/analyticsDeliverablesSection/ui/AnimatedResultList";

export function AnalyticsDeliverablesSection() {
    return (
        <section>
            <div className="container">
                <TitleArrow text="Что вы получите в результате?" link="/" />
            </div>
            <AnimatedResultsList />
        </section>
    );
}
