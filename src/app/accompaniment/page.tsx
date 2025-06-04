'use client'

import "./style.css";
import {
    AccompanimentHeroSection,
    AccompanimentScrumSection,
    AccompanimentHelpSection,
    AccompanimentProblemsSection,
    AccompanimentTariffsSection,
} from "@/widgets/accompaniment";


export default function Accompaniment() {
    return (
        <main id="accompaniment" className="pb-20 pt-20">
            <AccompanimentHeroSection />
            <AccompanimentProblemsSection />
            <AccompanimentHelpSection />
            <AccompanimentScrumSection />
            <AccompanimentTariffsSection />
        </main>
    );
}