import Link from "next/link";

const NavList = [
    {name: "ВНЕДРЕНИЕ С0", link: "/" },
    {name: "СОПРОВОЖДЕНИЕ", link: "accompaniment" },
    {name: "ВИДЖЕТЫ", link: "widgets" },
    {name: "АНАЛИТИКА", link: "analytics" },
]

const HeaderNav = () => {
    return(
        <ul className='flex justify-between gap-5 bg-white'>
            {NavList.map((item, index) => (
                <li key={index} className="relative overflow-hidden">
                    <Link
                        href={`/${item.link}`}
                        className='font-medium text-h8 block relative transition-transform duration-300 ease-in-out hover:-translate-y-full '
                    >
                        <span className="block">
                          {item.name}
                        </span>
                        <span className="block absolute top-full left-0 w-full">
                          {item.name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default HeaderNav;