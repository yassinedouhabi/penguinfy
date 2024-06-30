import { NavLink } from "react-router-dom";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoDownloadOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 left-0 right-0 z-10 mx-auto flex w-[90%] justify-around rounded-2xl border border-gray-200 bg-white bg-opacity-60 bg-clip-padding py-3 text-gray-800 backdrop-blur-xl backdrop-filter dark:border-gray-800 dark:bg-black/25 dark:text-white md:hidden">
      <NavLink
        to="/"
        className={
          ("flex flex-col items-center p-2",
          ({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "flex flex-col items-center rounded-xl bg-violet-800 bg-opacity-80 bg-clip-padding p-2 text-white backdrop-blur-xl backdrop-filter dark:bg-white dark:text-black"
                : "flex flex-col items-center p-2")
        }
      >
        <IoHomeOutline className="text-2xl" />
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink
        to="/search"
        className={
          ("flex flex-col items-center p-2",
          ({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "flex flex-col items-center rounded-xl bg-violet-800 bg-opacity-80 bg-clip-padding p-2 text-white backdrop-blur-xl backdrop-filter dark:bg-white dark:text-black"
                : "flex flex-col items-center p-2")
        }
      >
        <IoSearchOutline className="text-2xl" />
        <span className="text-xs">Search</span>
      </NavLink>
      <NavLink
        to="/downloads"
        className={
          ("flex flex-col items-center p-2",
          ({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "flex flex-col items-center rounded-xl bg-violet-800 bg-opacity-80 bg-clip-padding p-2 text-white backdrop-blur-xl backdrop-filter dark:bg-white dark:text-black"
                : "flex flex-col items-center p-2")
        }
      >
        <IoDownloadOutline className="text-2xl" />
        <span className="text-xs">Downloads</span>
      </NavLink>
      <NavLink
        to="/settings"
        className={
          ("flex flex-col items-center p-2",
          ({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "flex flex-col items-center rounded-xl bg-violet-800 bg-opacity-80 bg-clip-padding p-2 text-white backdrop-blur-xl backdrop-filter dark:bg-white dark:text-black"
                : "flex flex-col items-center p-2")
        }
      >
        <IoSettingsOutline className="text-2xl" />
        <span className="text-xs">Settings</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
