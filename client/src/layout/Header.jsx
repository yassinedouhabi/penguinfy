import { NavLink, Link } from "react-router-dom";
import {
  IoNotificationsOutline,
  IoSearchOutline,
  IoPersonOutline,
} from "react-icons/io5";
import useScroll from "../hooks/useScroll";
import { Glassmorphism } from "../styles/Glassmorphism";

const Header = () => {
  const isScrolled = useScroll();

  return (
    <header
      className={
        isScrolled
          ? `sticky top-2 mx-auto w-[94%] max-w-7xl overflow-hidden rounded-full bg-white shadow-xl dark:bg-black/10 ${Glassmorphism({ opacity: 60 })} px-4 transition-all duration-300 ease-in-out`
          : "w-full overflow-hidden border-b-2 border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-black"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold uppercase text-violet-600 dark:text-violet-400 md:text-xl"
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
          <ul className="flex md:hidden">
            <li className="flex space-x-4">
              <Link
                to="/new"
                className="text-sm font-bold text-gray-800 hover:opacity-80 dark:text-white"
              >
                New
              </Link>
              <Link
                to="/movies"
                className="text-sm font-bold text-gray-800 hover:opacity-80 dark:text-white"
              >
                Movies
              </Link>
              <Link
                to="/tv-shows"
                className="text-sm font-bold text-gray-800 hover:opacity-80 dark:text-white"
              >
                Tv-shows
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-x-4 text-2xl text-black md:flex">
          {/* Search Bar */}
          <Link to="/search" className="hidden">
            <IoSearchOutline className="cursor-pointer" />
          </Link>
          {/* Notifications */}
          <IoNotificationsOutline className="hidden cursor-pointer" />
          {/* User Profile */}
          <IoPersonOutline className="hidden cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
