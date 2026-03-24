import { data } from "@/views/audit/ui/DeliverablesSection/ui/lib";
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
          className={`bg-[#EBF0FD] rounded-4xl sm:py-6 py-4 ${
            i % 2 === 0
              ? "sm:px-66 px-6 sm:mr-[185px]"
              : "sm:ml-[175px] sm:px-22 px-6"
          }`}
        />
      ))}
    </ul>
  );
};
