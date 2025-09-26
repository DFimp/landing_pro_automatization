'use client'

import Link from "next/link";
import Image from "next/image";
import { links } from "@/widgets/home/homeFeaturesSection/ui/lib";
import * as motion from "motion/react-client";
import { detectMobile } from "@/shared/utils/detectMobile";

export default function FeaturesList() {
  const { isMobileView } = detectMobile()
  return (
    <ul className="sm:grid sm:grid-cols-2 flex flex-col sm:gap-8 gap-4 sm:mt-20 mt-5">
      {links.map((link) => (
        <motion.li
          key={link.name}
          className="bg-[#D8E3FD] rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            className="sm:text-h5 text-[14px] font-medium flex
                        justify-between items-center
                        sm:px-7.5 px-7 sm:py-5 py-3"
            href={link.link}
          >
            {isMobileView ? link.nameMobile || link.name : link.name}
            <Image src="/cross.svg" alt="Перейти" width={isMobileView ? 14 : 30} height={isMobileView ? 14 : 30} />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
