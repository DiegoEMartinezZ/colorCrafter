import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ExamButtonsFlatColor from "../ui/examples/containers/ExamButtonsFlatColor";
import ExamButtonsOutlineColor from "../ui/examples/containers/ExamButtonsOutlineColor";
import Data from "../ui/examples/data/Data";
import DataContrast from "../ui/examples/data/DataContrast";
import ImgDesign from "../ui/examples/imgs/ImgDesign";
import ImgHighlight from "../ui/examples/imgs/ImgHighlight";
import Subtitle from "../ui/txt/Subtitle";
import BtnActions from "../ui/buttons/BtnActions";

const Palette = () => {
  // Context
  const { newPalette, colorSelected, getColor, randomColor } =
    useContext(ThemeContext);

  // Handler when clicked copy the selected color from the current palette:

  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const copyColorFromPalette = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      setNotification(`${color} is copied to clipboard!`);
      setShowNotification(true);
    });

    setTimeout(() => {
      setShowNotification(false);
    }, 2500);
  };

  return (
    <>
      <section className="relative flex items-center justify-center">
        <div
          className={`flex fixed bottom-0 z-10 lg:w-72 sm:w-1/2  w-11/12 my-5 lg:relative lg:h-full items-center p-0.5 rounded-full justify-center`}
        >
          <input
            type="color"
            className="absolute w-7 h-7 left-4 border-none cursor-pointer"
            value={colorSelected}
            onChange={getColor}
          />

          <input
            type="text"
            className="p-3 shadow-md text-center w-full font-medium h-full rounded-full bg-light"
            value={colorSelected}
            onChange={getColor}
          />

          <BtnActions name={"Random"} handler={randomColor} />
        </div>
      </section>

      {/* <h1
        className={`${
          theme === "light" ? "dark:text-dark" : "text-light"
        } my-3 p-2 font-bold text-lg`}
      >
        {nameColor}
      </h1> */}
      <div className="lg:flex p-5 md:w-1/2 sm:w-2/3 m-auto lg:justify-center">
        {newPalette.map((color, idx) => (
          <ul key={idx} className="lg:mx-1">
            <section className="h-auto w-full lg:relative my-1">
              <div
                style={{ backgroundColor: color }}
                className="flex items-center w-full flex-nowrap h-12 rounded-lg lg:rounded-xl justify-center lg:block lg:w-32 lg:h-32 cursor-pointer"
                onChange={getColor}
                onClick={() => {
                  copyColorFromPalette(color);
                }}
              >
                <div className="lg:flex lg:flex-col lg:absolute lg:right-0 lg:bottom-0 lg:top-12 lg:left-0">
                  <h1 className="font-thin p-1 text-light">{color}</h1>
                </div>
              </div>
            </section>
          </ul>
        ))}
      </div>

      <Subtitle name={"Examples"} />

      <section className="md:flex-col flex justify-center lg:flex-row flex-col items-center">
        <div className="flex flex-col md:flex-row">
          <ExamButtonsFlatColor />
          <ExamButtonsOutlineColor />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col">
          <Data />
          <DataContrast />
        </div>
      </section>
      <div className="flex justify-center md:flex-row items-center flex-col lg:flex-row">
        <ImgDesign />
        <ImgHighlight />
      </div>

      {showNotification && (
        <div className="fixed bg-aquamarine-200 top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md transition-opacity duration-500">
          {notification}
        </div>
      )}
    </>
  );
};

export default Palette;
