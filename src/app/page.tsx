import HomeHero from "@/widgets/homeHero/homeHero";
import ConsultCard from "@/shared/ui/ConsultCard/ConsultCard";
import {TitleArrow} from "@/shared/ui/titleArrow/TitleArrow";
import ProcessList from "@/widgets/process/ProcessList";


export default function Home() {
  return (
      <main className="home mb-25 pt-15 space-y-20">
          <HomeHero />
          <TitleArrow
              text="Чем мы можем помочь вашему бизнесу"
              link='/'
          />
          <ProcessList />
          <ConsultCard />
      </main>
  );
}
