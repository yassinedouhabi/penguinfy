import { useState, useEffect } from "react";
import {
  MdOutlineLightMode,
  MdDarkMode,
  MdOutlineDesktopMac,
} from "react-icons/md";

const ThemeSelector = () => {
  const getSystemTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const applyTheme = (theme) => {
      document.documentElement.classList.remove(
        "light",
        "dark",
        "custom-light",
        "custom-dark",
      );
      if (theme === "system") {
        theme = getSystemTheme();
      }
      document.documentElement.classList.add(theme);
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setMenuOpen(false);
  };

  const defaultTheme = theme === "system" ? getSystemTheme() : theme;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-balcktext-xl font-medium dark:text-white"
      >
        {defaultTheme === "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
      {menuOpen && (
        <div className="dark:black absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-black dark:text-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleThemeChange("light")}
              className="text-inherit hover:bg-gray-100 hover:dark:bg-gray-900 block w-full px-4 py-2 text-left text-sm"
            >
              <MdOutlineLightMode className="mr-2 inline" /> Light Mode
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="text-inherit hover:bg-gray-100 hover:dark:bg-gray-900 block w-full px-4 py-2 text-left text-sm"
            >
              <MdDarkMode className="mr-2 inline" /> Dark Mode
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className="text-inherit hover:bg-gray-100 hover:dark:bg-gray-900 block w-full px-4 py-2 text-left text-sm"
            >
              <MdOutlineDesktopMac className="mr-2 inline" /> System Preference
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
