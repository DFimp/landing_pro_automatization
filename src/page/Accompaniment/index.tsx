import {
    AccompanimentHeroSection,
    AccompanimentScrumSection,
    AccompanimentHelpSection,
    AccompanimentProblemsSection,
    AccompanimentTariffsSection,
} from "@/widgets/accompaniment";
import "./style.css";

export default function Accompaniment() {
    return (
        <main id="accompaniment" className="sm:pb-20 pb-10 sm:pt-20 overflow-hidden">
            <AccompanimentHeroSection />
            <AccompanimentProblemsSection />
            <AccompanimentHelpSection />
            <AccompanimentScrumSection />
            <AccompanimentTariffsSection />
        </main>
    );
}