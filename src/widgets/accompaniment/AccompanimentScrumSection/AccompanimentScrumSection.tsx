import StepTimeline from "@/widgets/accompaniment/AccompanimentScrumSection/ui/StepTimeline";

export function AccompanimentScrumSection() {
  return (
    <>
      <div className="flex flex-col sm:gap-20 gap-5 sm:mt-20 mt-10">
        <h3 className="font-semibold sm:text-h3 text-2xl text-white mx-auto w-full max-w-[1200px] px-4">
          Как мы работаем: четко и по Scrum
        </h3>
        <h4 className="font-light sm:text-h4 text-[14px] text-white sm:mb-20 mb-10 mx-auto w-full max-w-[1200px] px-4">
          Мы используем гибкую методологию{" "}
          <span className="font-semibold">Scrum</span>, чтобы ваше сопровождение
          amoCRM было{" "}
          <span className="font-semibold">эффективным и прозрачным</span>.
        </h4>
      </div>

      <StepTimeline />

      <div className="mx-auto w-full max-w-[1200px] px-4">
        <h4 className="sm:text-h4 sm:font-medium text-white sm:mt-40 ">
          Такой подход позволяет{" "}
          <span className="font-semibold">оперативно реагировать</span> на
          изменения, <span className="font-semibold">соблюдать сроки</span> и
          обеспечивать высокое качество работы.
        </h4>
      </div>
    </>
  );
}
