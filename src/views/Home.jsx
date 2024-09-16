import React, { useContext } from "react";
import Palette from "../components/Palette";
import ShortText from "../ui/txt/ShortText";
import { ThemeContext } from "../context/ThemeContext";
import DarkModeBtn from "../components/DarkModeBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`bg-${
        theme === "light" ? "light" : "dark"
      } text-white relative`}
    >
      <NavBar />
      <div className="pt-3 text-center">
        <FontAwesomeIcon
          icon={faPenFancy}
          className={`text-${theme === "light" ? "dark" : "light"}`}
        />
        <ShortText
          text={
            "Press the spacebar to get a random color or pick your own color."
          }
        />
        <div className="mt-4">
          <Palette />
        </div>
      </div>
    </section>
  );
};

export default Home;
