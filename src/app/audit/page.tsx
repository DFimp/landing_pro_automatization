'use client'

import {
  StepsSection,
  FinalSection,
  HeroSection,
  ResultSection,
  DeliverablesSection,
} from "@/widgets/audit";

export default function Audit() {
  return (
    <main id="analytics" className="sm:pb-20 sm:pt-20">
      <HeroSection />
      <StepsSection />
      <ResultSection /> 
      <DeliverablesSection />
      <FinalSection />
    </main>
  );
}
