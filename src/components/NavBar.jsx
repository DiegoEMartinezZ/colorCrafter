import React, { useContext } from "react";
import DarkModeBtn from "./DarkModeBtn";
import { ThemeContext } from "../context/ThemeContext";
import Subtitle from "../ui/txt/Subtitle";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center lg:justify-around bg-${
        theme === "light" ? "light" : "dark"
      } p-5 `}
    >
      <a href="/">
        <img src="/img/LogotipoTCC.png" alt="logotipo" className="w-8 h-auto" />
      </a>

      <Subtitle name={"The Color Crafter"} />

      <DarkModeBtn />
    </div>
  );
};

export default NavBar;
