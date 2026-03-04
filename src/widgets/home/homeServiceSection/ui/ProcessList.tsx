import { solutions } from "@/widgets/home/homeServiceSection/ui/lib";
import { AnimatedListItem } from "@/shared/ui/animatedListItem/AnimatedListItem";
import Image from "next/image";

const ProcessList = () => {
  return (
    <div>
      <div className="hidden sm:block process-list__container mx-auto w-full max-w-[1200px] px-4">
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
      </div>

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
