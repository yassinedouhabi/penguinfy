// import { useState } from "react";
import {
  MdOutlineLightMode,
  MdDarkMode,
  MdOutlineDesktopMac,
} from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const ThemeSelector = () => {
  const { setTheme } = useTheme();
  // const [menuOpen, setMenuOpen] = useState(false);

  // const getSystemTheme = () => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     return "dark";
  //   }
  //   return "light";
  // };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // setMenuOpen(false);
  };

  // const defaultTheme = theme === "system" ? getSystemTheme() : theme;

  return (
    <div className="relative inline-block text-left">
      {/* <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-xl font-medium text-black dark:text-white"
      >
        {defaultTheme === "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button> */}
      {/* {menuOpen && ( */}
      <div className="mt-2 w-56 rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-black dark:text-white">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            onClick={() => handleThemeChange("light")}
            className="block w-full px-4 py-2 text-left text-sm text-inherit hover:bg-gray-100 hover:dark:bg-gray-900"
          >
            <MdOutlineLightMode className="mr-2 inline" /> Light Mode
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className="block w-full px-4 py-2 text-left text-sm text-inherit hover:bg-gray-100 hover:dark:bg-gray-900"
          >
            <MdDarkMode className="mr-2 inline" /> Dark Mode
          </button>
          <button
            onClick={() => handleThemeChange("system")}
            className="block w-full px-4 py-2 text-left text-sm text-inherit hover:bg-gray-100 hover:dark:bg-gray-900"
          >
            <MdOutlineDesktopMac className="mr-2 inline" /> System Preference
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default ThemeSelector;
