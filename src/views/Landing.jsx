import React, { useContext } from "react";
import Footer from "../sections/Footer";
import Title from "../ui/txt/Title";
import DemoButton from "../ui/buttons/DemoButton";
import { ThemeContext } from "../context/ThemeContext";
import DarkModeBtn from "../components/DarkModeBtn";

const Landing = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section
        className={`${
          theme === "light" ? "dark:bg-light " : "bg-dark"
        }   bottom-0 top-0 right-0 left-0`}
      >
        <DarkModeBtn />
        <div
          className={`text-dark text-center flex flex-col items-center justify-center h-screen`}
        >
          <Title name={"ColorCrafter"} />
          <DemoButton text={"Create Palette!"} view={"/home"} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Landing;
