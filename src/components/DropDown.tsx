import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block">
        <Link to={"/login"}>
          <MenuButton className="cursor-pointer p-2 rounded-full  focus:outline-none">
            <CiUser size={25} />
          </MenuButton>
        </Link>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              >
                My Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              >
                Orders
              </a>
            </MenuItem>

            <form action="#" method="POST">
              <MenuItem>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Menu>
    </>
  );
};

export default DropDown;
