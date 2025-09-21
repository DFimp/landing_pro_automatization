import Link from "next/link";
import Image from "next/image";
import { links } from "@/widgets/home/homeFeaturesSection/ui/lib";
import * as motion from "motion/react-client";

export default function FeaturesList() {
  return (
    <ul className="sm:grid sm:grid-cols-2 flex flex-col gap-8 sm:mt-20 mt-10">
      {links.map((link) => (
        <motion.li
          key={link.name}
          className="bg-[#D8E3FD] rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            className="sm:text-h5 font-medium flex
                        justify-between items-center
                        px-7.5 py-5"
            href={link.link}
          >
            {link.name}
            <Image src="/cross.svg" alt="Перейти" width={30} height={30} />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
