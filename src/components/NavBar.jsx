import React, { useContext } from "react";
import DarkModeBtn from "./DarkModeBtn";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex justify-around items-center  bg-${
        theme === "light" ? "light" : "dark"
      } p-5`}
    >
      <a href="/">
        <h3
          className={`text-${
            theme === "light" ? "dark" : "light"
          } text-lg font-bold `}
        >
          TheColorCrafter
        </h3>
      </a>
      <DarkModeBtn />
    </div>
  );
};

export default NavBar;
