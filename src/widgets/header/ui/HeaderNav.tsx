import Link from "next/link";

const NavList = [
    {name: "ВНЕДРЕНИЕ С0", link: "implementation" },
    {name: "СОПРОВОЖДЕНИЕ", link: "about" },
    {name: "ВИДЖЕТЫ", link: "contact" },
    {name: "АНАЛИТИКА", link: "contact" },
]

const HeaderNav = () => {
    return(
        <ul className='flex justify-between gap-5'>
            {NavList.map((item, index) => (
                <li key={index}>
                    <Link
                        href={`/${item.link}`}
                        className='font-medium text-h8'
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default HeaderNav;