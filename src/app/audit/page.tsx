import {
  StepsSection,
  FinalSection,
  HeroSection,
  ResultSection,
  DeliverablesSection,
} from "@/widgets/audit";

export default function Audit() {
  return (
    <main id="analytics" className="pb-20 pt-20">
      <HeroSection />
      <StepsSection />
      <ResultSection />
      <DeliverablesSection />
      <FinalSection />
    </main>
  );
}
