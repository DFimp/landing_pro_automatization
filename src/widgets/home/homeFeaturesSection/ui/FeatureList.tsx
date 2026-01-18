import Image from "next/image";
import { links } from "@/widgets/home/homeFeaturesSection/ui/lib";

export default function FeaturesList() {
  return (
    <ul className="sm:grid sm:grid-cols-2 flex flex-col sm:gap-8 gap-4 sm:mt-20 mt-5">
      {links.map((link) => (
        <li key={link.name} className="bg-[#D8E3FD] rounded-full">
          <div
            className="sm:text-h5 text-[14px] font-medium flex
                        justify-between items-center
                        sm:px-7.5 px-7 sm:py-5 py-3"
          >
            <span className="hidden sm:inline">{link.name}</span>
            <span className="inline sm:hidden">
              {link.nameMobile || link.name}
            </span>
            <Image
              src="/decor/cross.svg"
              alt="перейти"
              width={30}
              height={30}
              className="w-[14px] h-[14px] sm:w-[30px] sm:h-[30px]"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
