import Header from "@/widgets/header/Header";
import Hero from "@/widgets/hero/Hero";
import Card from "@/shared/ui/card/Card";

export default function Home() {
  return (
      <div className="home mb-25">
          <Header />
          <Hero />
          <Card />
      </div>
  );
}
