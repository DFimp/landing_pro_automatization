import { solutions } from "@/views/onboarding/components/homeServiceSection/ui/lib";
import { AnimatedListItem } from "@/shared/ui/animatedListItem/AnimatedListItem";
import Image from "next/image";
import { Container } from "@/shared/ui/layout";

const ProcessList = () => {
  return (
    <div>
      <Container className="hidden sm:block process-list__container">
        <ul className="space-y-4">
          {solutions.map((solution, index) => (
            <AnimatedListItem
              oneLevel={false}
              key={index}
              index={index}
              imageSrc={solution.imageSrc}
              title={solution.title}
              description={solution.description}
              descriptionClassName={solution.descriptionClassname}
            />
          ))}
        </ul>
      </Container>

      <div className="block sm:hidden">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="my-5 px-6 py-8 flex flex-col gap-3 rounded-[64px] items-center"
            style={{
              boxShadow: "0 4px 20px #3760E780",
            }}
          >
            <Image
              src={solution.imageSrc}
              alt={solution.title}
              width={72}
              height={72}
            />
            <h3 className="font-semibold">{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessList;
