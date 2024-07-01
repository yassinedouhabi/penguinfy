// ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSystemTheme } from "../utils/getSystemTheme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);
