import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

interface Link {
  to: string;
  label: string;
}

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  links: Link[];
}

const Sidebar = ({ isVisible, setIsVisible, links }: Props) => {
  return (
    <div
      className={`absolute top-0 left-0 bottom-0 z-30 bg-white transition-all duration-300 w-full  ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col ">
        <div className="flex justify-between items-center p-3 shadow-md">
          <img className="w-25" src={assets.logo} alt="logo" />
          <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer  "
          >
            <IoIosClose size={25} />
          </button>
        </div>
        {links.map((link, index) => (
          <NavLink
            key={index}
            onClick={() => setIsVisible(false)}
            className={({ isActive }) =>
              ` px-3 py-2 border-b border-gray-200 ${
                isActive
                  ? "bold bg-black text-white "
                  : "text-gray-500 hover:text-gray-700"
              }`
            }
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
