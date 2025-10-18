import { useContext, useEffect, useState } from "react";
import {
  CiMenuFries,
  CiSearch,
  CiShoppingBasket,
  CiUser,
} from "react-icons/ci";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { links } from "../constants/constants";
import { SearchContext } from "../context/searchProvider";
import useCartQueryStore from "../store/cartQueryStore";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { showSearch, setShowSearch } = useContext(SearchContext);
  const totalCount = useCartQueryStore((s) => s.totalCount);
  const navigate = useNavigate();
  const location = useLocation();
  const isLocationPage = location.pathname === "/collection";

  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          isLocationPage
            ? "relative flex justify-between items-center px-3 py-5 shadow-md"
            : `fixed top-0 left-0 z-20 w-full bg-white flex justify-between items-center px-3 py-5 transition-all duration-500
        ${
          isSticky
            ? "shadow-md translate-y-0"
            : "shadow-none py-1 -translate-y-20 "
        }`
        }
        `}
      >
        <Link to={"/"}>
          <img className="w-25" src={assets.logo} alt="logo" />
        </Link>

        <ul className="hidden sm:flex gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-700 bold border-b-2 border-gray-500 py-2"
                    : `text-gray-500  py-2 transition-all duration-100 hover:text-gray-700 
                  hover:bold hover:border-b-2 hover:border-b-gray-400 `
                }
                to={l.to}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* icons */}
        <div className="flex items-center gap-5">
          {isLocationPage && (
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer p-2 rounded-full  hover:bg-gray-200  transition-colors duration-200"
            >
              <CiSearch size={25} />
            </button>
          )}
          <Link
            className="rounded-full hover:bg-gray-200 p-2 transition-all duration-200"
            to={"/login"}
          >
            <CiUser size={25} />
          </Link>
          <button
            onClick={() => navigate("/cart")}
            className="cursor-pointer relative p-2 rounded-full hover:bg-gray-200  transition-colors duration-200"
          >
            <CiShoppingBasket size={25} />
            <span className="absolute left-5 top-5.5 text-white px-1 rounded-full bg-black text-xs">
              {totalCount}
            </span>
          </button>
          <button
            onClick={() => setIsVisible(true)}
            className="cursor-pointer sm:hidden ml-3"
          >
            <CiMenuFries />
          </button>
        </div>
      </nav>
      <Sidebar
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        links={links}
      />
    </>
  );
};

export default Navbar;
