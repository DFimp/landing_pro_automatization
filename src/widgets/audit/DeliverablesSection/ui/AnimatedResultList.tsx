import { data } from "@/widgets/audit/DeliverablesSection/ui/lib";
import { AnimatedListItem } from "@/shared/ui/animatedListItem/AnimatedListItem";

export const AnimatedResultsList = () => {
  return (
    <ul className="sm:space-y-10 space-y-5 mt-10">
      {data.map((item, i) => (
        <AnimatedListItem
          oneLevel={true}
          key={i}
          index={i}
          title={item.title}
          description={item.text}
          number={i + 1}
          className={`bg-[#EBF0FD] py-4 ${
            i % 2 === 0
              ? "rounded-r-full sm:px-66 px-10 sm:mr-[185px]"
              : "rounded-l-full sm:ml-[175px] sm:px-22 px-10"
          }`}
        />
      ))}
    </ul>
  );
};
