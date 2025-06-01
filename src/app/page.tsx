import Hero from "@/widgets/hero/Hero";
import Card from "@/shared/ui/card/Card";
import {Services} from "@/widgets/services/Services";
import ProcessList from "@/widgets/process/ProcessList";


export default function Home() {
  return (
      <main className="home mb-25 pt-15 space-y-20">
          <Hero />
          <Services
              text="Чем мы можем помочь вашему бизнесу"
              link='/'
          />
          <ProcessList />
          <Card />
      </main>
  );
}
