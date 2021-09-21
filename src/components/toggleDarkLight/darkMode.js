import React, { useContext } from "react";
import { RiLightbulbFill } from "react-icons/ri";
import { MdLightbulbOutline } from "react-icons/md";
import { ThemeContext } from "../../context/themeContext";

export const DarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <RiLightbulbFill />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <MdLightbulbOutline />
        </button>
      )}
    </div>
  );
};
