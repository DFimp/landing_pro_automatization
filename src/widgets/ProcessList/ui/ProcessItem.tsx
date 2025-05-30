// components/ProcessItem.tsx
import Image from "next/image";
import AnimatedListItem from "@/enteties/process/ui/AnimatedListItem";

interface ProcessItemProps {
    direction: "left" | "right";
    imageSrc: string;
    title: string;
    description: string;
    offset?: string;
}

export const ProcessItem = ({
                                direction,
                                imageSrc,
                                title,
                                description,
                                offset = ""
                            }: ProcessItemProps) => {
    return (
        <AnimatedListItem
            direction={direction}
            className={`flex items-center gap-10 ${offset}`}
        >
            <Image src={imageSrc} alt='process image' width={150} height={150} />
            <div className='content max-w-[500px] space-y-4'>
                <h3 className='text-h5 font-semibold'>{title}</h3>
                <p className="text-h7 font-normal">{description}</p>
            </div>
        </AnimatedListItem>
    );
};