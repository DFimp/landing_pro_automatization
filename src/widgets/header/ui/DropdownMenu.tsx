import Link from "next/link";
import navFlipStyles from "../styles/NavFlip.module.scss";

interface MenuItem {
  name: string;
  link: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  isOpen,
  setIsOpen,
}) => {
  return (
    <li className="relative" onMouseEnter={() => setIsOpen(true)}>
      <button
        className={`font-medium text-h8 transition-colors duration-300 cursor-pointer ${navFlipStyles.link}`}
        aria-expanded={isOpen}
      >
        <span className={navFlipStyles.inner}>
          <span className={navFlipStyles.front}>{title}</span>
          <span className={navFlipStyles.top} aria-hidden="true">
            {title}
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-[-100%] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-[2000] min-w-[200px]">
          <ul className="py-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="block px-4 py-2 font-medium text-h8 hover:text-blue hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;
