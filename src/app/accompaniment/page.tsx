"use client"

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
        <main id="accompaniment" className="sm:pb-20 sm:pt-20 overflow-hidden">
            <AccompanimentHeroSection />
            <AccompanimentProblemsSection />
            <AccompanimentHelpSection />
            <AccompanimentScrumSection />
            <AccompanimentTariffsSection />
        </main>
    );
}