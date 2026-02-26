import Image from "next/image";
import { AnimatedListItemProps } from "@/shared/ui/animatedListItem/models";
import { AnimatedListItemMotion } from "./AnimatedListItem.motion";

export const AnimatedListItem = ({
  index,
  left,
  imageSrc,
  title,
  description,
  number,
  descriptionClassName = "",
  className = "",
  children,
  oneLevel = true,

  animate = true,
}: AnimatedListItemProps & { animate?: boolean }) => {
  const isLeft = left ?? index % 2 === 0;
  const hasCustomRounded = /\brounded\b|\brounded-[^\s]+\b/.test(className);

  const content = (
    <>
      {number && (
        <h2 className="text-blue font-bold text-[24px] sm:text-[64px]">
          {number}
        </h2>
      )}

      {imageSrc && <Image src={imageSrc} alt={title} width={150} height={150} />}

      <div className="content">
        <h3 className="font-semibold sm:text-h4 text-[14px]">{title}</h3>
        {description && (
          <p className={`font-normal sm:text-h7 text-[14px] ${descriptionClassName}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </>
  );

  const sideRoundingClass = hasCustomRounded
    ? ""
    : isLeft
      ? "rounded-r-full"
      : "rounded-l-full";

  const liClass = `flex items-center gap-4 ${sideRoundingClass} ${className}`.trim();

  if (animate) {
    return (
      <AnimatedListItemMotion
        index={index}
        isLeft={isLeft}
        oneLevel={oneLevel}
        className={liClass}
      >
        {content}
      </AnimatedListItemMotion>
    );
  }

  return <li className={liClass}>{content}</li>;
};
