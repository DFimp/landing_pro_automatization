import Header from "@/widgets/header/Header";
import Hero from "@/widgets/hero/Hero";
import Card from "@/shared/ui/card/Card";
import {Services} from "@/widgets/services/Services";
import ProcessList from "@/widgets/ProcessList/ProcessList";

export default function Home() {
  return (
      <div className="home mb-25 space-y-20">
          <Header />
          <Hero />
          <Services />
          <ProcessList />
          <Card />
      </div>
  );
}
