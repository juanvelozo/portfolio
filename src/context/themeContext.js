import { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && localStorage) {
    const storedPrefs = localStorage.getItem("current-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    if (matchMedia("(prefered-color-scheme: dark").matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const checkTheme = (existing) => {
    const root = document.documentElement;
    const Darked = existing === "dark";
    root.classList.remove(Darked ? "light" : "dark");
    root.classList.add(existing);

    localStorage.setItem("current-theme", existing);
  };
  if (initialTheme) {
    checkTheme(initialTheme);
  }
  useEffect(() => {
    checkTheme(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
