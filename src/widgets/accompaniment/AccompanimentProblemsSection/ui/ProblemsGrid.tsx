import Image from "next/image";
import { problems } from "@/widgets/accompaniment/AccompanimentProblemsSection/ui/lib";
import ProblemsGridItemMotion from "./ProblemsGridItemMotion.client";

export default function ProblemsGrid() {
  return (
    <div className="problems-grid mx-auto w-full max-w-[1200px] px-4">
      <ul className="flex flex-wrap justify-center gap-10">
        {problems.map((problem, index) => (
          <ProblemsGridItemMotion key={index} index={index}>
            <div
              style={{
                boxShadow: "0 0 15px rgba(55, 96, 231, 0.5)",
                background: "rgba(0, 0, 0, 0.3)",
              }}
              className="card rounded-[60px] px-10 sm:py-15 py-10 space-y-3 sm:max-w-90 sm:h-[650px]"
            >
              <Image
                src={problem.image}
                alt="проблема и ее решение"
                width={92}
                height={92}
                className="w-[46px] h-[46px] sm:w-[92px] sm:h-[92px]"
              />
              <h3 className="text-white font-medium sm:text-h5 text-[14px]">
                {problem.title}
              </h3>
              <h4 className="text-white font-light sm:text-h5 text-[14px]">
                {problem.description}
              </h4>
            </div>
          </ProblemsGridItemMotion>
        ))}
      </ul>
    </div>
  );
}
