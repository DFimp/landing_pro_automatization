import Link from "next/link";
import Image from "next/image";
import {links} from "@/widgets/widgets/widgetsFeaturesSection/ui/lib";
import * as motion from "motion/react-client"


export default function FeaturesList() {
    return (
        <ul className="grid grid-cols-2 gap-8 mt-20">
            {links.map((link) => (
                    <motion.li
                        key={link.name}
                        className="bg-[#D8E3FD] rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <Link className="text-h5 font-medium flex
                        justify-between items-center
                        px-7.5 py-5" href={link.link}>
                            {link.name}
                            <Image src="/cross.svg" alt="Перейти" width={30} height={30} />
                        </Link>
                    </motion.li>
            ))}
        </ul>
    );
}
