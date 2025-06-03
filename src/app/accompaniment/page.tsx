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
        <main id="accompaniment" className="pt-20 pb-20">
            <div className='accompaniment__container space-y-20'>
                <AccompanimentHeroSection />
                <AccompanimentProblemsSection />
                <AccompanimentHelpSection />
                <AccompanimentScrumSection />
                <AccompanimentTariffsSection />
            </div>
        </main>
    );
}