import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

import ExamButtonsFlatColor from "../ui/examples/containers/ExamButtonsFlatColor";
import ExamButtonsOutlineColor from "../ui/examples/containers/ExamButtonsOutlineColor";
import Data from "../ui/examples/data/Data";

const Palette = () => {
  // Context
  const {
    theme,
    inputRef,
    handleInputSelected,
    newPalette,
    colorSelected,
    getColor,
  } = useContext(ThemeContext);

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
          className={`bg-${
            theme === "light" ? "dark" : "dark"
          } flex relative h-full items-center p-0.5 rounded-full justify-center`}
        >
          <input
            type="color"
            className="absolute w-7 h-7 left-4 rounded-full border-none cursor-pointer"
            value={colorSelected}
            onChange={getColor}
          />

          <input
            type="text"
            ref={inputRef}
            value={colorSelected}
            className="p-2 text-center w-full font-medium h-full rounded-full bg-transparent"
            onChange={getColor}
            onClick={handleInputSelected}
          />
        </div>
      </section>

      {/* <h1
        className={`${
          theme === "light" ? "dark:text-dark" : "text-light"
        } my-3 p-2 font-bold text-lg`}
      >
        {nameColor}
      </h1> */}
      <div className="my-5">
        {newPalette.map((color, idx) => (
          <ul key={idx}>
            <section className="h-auto w-full">
              <div
                style={{ backgroundColor: color }}
                className="flex items-center flex-nowrap justify-center lg:block lg:m-auto lg:w-2/3  cursor-pointer"
                onChange={getColor}
                onClick={() => {
                  copyColorFromPalette(color);
                }}
              >
                <h1 className=" font-thin px-4 py-3 rounded-full p-1 text-light">
                  {color}
                </h1>
              </div>
            </section>
          </ul>
        ))}
      </div>

      <section className="p-5 flex justify-center flex-col items-center">
        <ExamButtonsFlatColor />
        <ExamButtonsOutlineColor />
        <Data />
      </section>

      {showNotification && (
        <div className="fixed bg-aquamarine-200 top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md transition-opacity duration-500">
          {notification}
        </div>
      )}
    </>
  );
};

export default Palette;
