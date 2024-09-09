import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Palette = () => {
  // Context
  const { theme, inputRef, handleInputSelected } = useContext(ThemeContext);
  //

  //  Create a 6-digit hexadecimal color code.
  const newRandomColor = () => {
    var numbersAndLetters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += numbersAndLetters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  //

  const [colorSelected, setColorSelected] = useState(newRandomColor());

  //handler for spacebar
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      setColorSelected(newRandomColor());
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Get the value of the color input

  const getColor = (e) => {
    e.preventDefault();
    setColorSelected(e.target.value);
  };

  // API request for the color name
  // const apiURL = `https://api.color.pizza/v1/?values=${colorSelected.slice(1)}`;

  // const [nameColor, setNameColor] = useState();

  // useEffect(() => {
  //   const newColorName = () => {
  //     axios
  //       .get(apiURL)
  //       .then((res) => {
  //         const name = res.data.paletteTitle;
  //         console.log(name);
  //         setNameColor(name);
  //       })
  //       .catch((err) => {
  //         "ERROR", err;
  //       });
  //   };
  //   newColorName();
  // }, []);

  // API request for color scheme
  const [newPalette, setNewPalette] = useState([]);

  const colorSchemeURL = `https://www.thecolorapi.com/scheme?hex=${colorSelected.slice(
    1
  )}&format=JSON&mode=monochrome&count=6`;

  useEffect(() => {
    const paletteColor = () => {
      axios
        .get(colorSchemeURL)
        .then((res) => {
          const colors = res.data.colors.map((color) => color.hex.value);
          setNewPalette(colors);
        })
        .catch((err) => {
          "ERROR", err;
        });
    };
    paletteColor();
  }, [newPalette]);

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

  //

  return (
    <>
      <section className="relative flex items-center  justify-center">
        <div
          className={`bg-${
            theme === "light" ? "dark" : "aquamarine-200"
          } flex relative h-full items-center p-0.5 rounded-full w-60 justify-center`}
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
                className="flex items-center justify-center w-full h-20 cursor-pointer"
                onChange={getColor}
                onClick={() => {
                  copyColorFromPalette(color);
                }}
              >
                <h1 className=" font-thin px-4 py-2 rounded-full p-1 text-light">
                  {color}
                </h1>
              </div>
            </section>
          </ul>
        ))}
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
