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