import { NavLink, Link } from "react-router-dom";
import {
  IoNotificationsOutline,
  IoSearchOutline,
  IoPersonOutline,
} from "react-icons/io5";
import NavLayout from "./NavLayout";
import useScroll from "../hooks/useScroll";
import ThemeSelector from "../components/ThemeSelector";

const Header = () => {
  const isScrolled = useScroll();

  return (
    <>
      <header
        className={`absolute left-0 top-0 z-20 mx-auto flex w-full items-center justify-between bg-white/80 bg-opacity-90 bg-clip-padding px-4 py-2 shadow-xl backdrop-blur-3xl backdrop-filter transition-all duration-300 dark:bg-black/40 md:py-4 ${
          isScrolled ? "sticky top-4 rounded-xl border-none" : ""
        }`}
      >
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold uppercase text-violet-600 dark:text-violet-400"
          >
            Penguinfy
          </Link>

          {/* Navigation Links */}
          <nav className="hidden space-x-4 md:flex">
            <NavLink
              to="/"
              className={
                ("flex flex-col items-center p-2",
                ({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "font-bold text-gray-800 underline dark:text-white"
                      : "font-bold text-gray-800 hover:opacity-80 dark:text-white")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/search"
              className={
                ("flex flex-col items-center p-2",
                ({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "font-bold text-gray-800 underline dark:text-white"
                      : "font-bold text-gray-800 hover:opacity-80 dark:text-white")
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/downloads"
              className={
                ("flex flex-col items-center p-2",
                ({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "font-bold text-gray-800 underline dark:text-white"
                      : "font-bold text-gray-800 hover:opacity-80 dark:text-white")
              }
            >
              Downloads
            </NavLink>
            <NavLink
              to="/settings"
              className={
                ("flex flex-col items-center p-2",
                ({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "font-bold text-gray-800 underline dark:text-white"
                      : "font-bold text-gray-800 hover:opacity-80 dark:text-white")
              }
            >
              Settings
            </NavLink>
          </nav>
        </div>
        <div className="text-tertiary items-center space-x-4 text-2xl md:flex">
          {/* Search Bar */}
          <Link to="/search" className="hidden">
            <IoSearchOutline className="cursor-pointer" />
          </Link>
          {/* Notifications */}
          <IoNotificationsOutline className="hidden cursor-pointer" />
          {/* User Profile */}
          <IoPersonOutline className="hidden cursor-pointer" />
          {/* Theme */}
          <ThemeSelector />
        </div>
      </header>
      <NavLayout />
    </>
  );
};

export default Header;
