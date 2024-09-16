import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="absolute right-0 p-5" onClick={toggleTheme}>
      <FontAwesomeIcon
        className={`text-${theme === "light" ? "dark" : "light"}`}
        icon={theme === "light" ? faMoon : faSun}
      />
    </button>
  );
};

export default DarkModeBtn;
