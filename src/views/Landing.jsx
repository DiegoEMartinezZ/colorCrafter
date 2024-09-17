import React, { useContext } from "react";
import Footer from "../sections/Footer";
import DemoButton from "../ui/buttons/DemoButton";
import { ThemeContext } from "../context/ThemeContext";

const Landing = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section
        className={`${
          theme === "light" ? "dark:bg-light " : "bg-dark"
        }   bottom-0 top-0 right-0 left-0`}
      >
        <div
          className={`text-dark text-center flex flex-col items-center justify-center h-screen`}
        >
          <img src="/img/LogoTCC.png" alt="" className="w-72 h-auto" />
          <DemoButton text={"Create Palette!"} view={"/home"} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Landing;
