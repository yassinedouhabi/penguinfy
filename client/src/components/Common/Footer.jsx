import { NavLink } from "react-router-dom";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoDownloadOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const navItems = [
  { to: "/", icon: IoHomeOutline, label: "Home" },
  { to: "/search", icon: IoSearchOutline, label: "Search" },
  { to: "/downloads", icon: IoDownloadOutline, label: "Downloads" },
  { to: "/settings", icon: IoSettingsOutline, label: "Settings" },
];

const Nav = () => {
  const linkClassNames = ({ isActive, isPending }) =>
    isPending
      ? "pending"
      : isActive
        ? "flex flex-col w-full items-center rounded-xl bg-violet-800 bg-opacity-80 bg-clip-padding p-2 text-white backdrop-blur-xl backdrop-filter dark:bg-white dark:text-black"
        : "flex flex-col w-full items-center p-2";

  return (
    <nav className="fixed bottom-2 left-0 right-0 z-10 mx-auto flex w-[90%] justify-around rounded-2xl border border-gray-200 bg-white bg-opacity-60 bg-clip-padding px-2 py-3 text-gray-800 backdrop-blur-xl backdrop-filter dark:border-gray-800 dark:bg-black/25 dark:text-white md:hidden">
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink to={to} className={linkClassNames} key={to}>
          <Icon className="text-2xl" />
          <span className="text-xs">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
