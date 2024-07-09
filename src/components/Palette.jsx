import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Palette = () => {
  const newRandomColor = () => {
    const letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [colorSelected, setColorSelected] = useState(newRandomColor());

  // get the value of the color input

  const newColor = (e) => {
    e.preventDefault();
    setColorSelected(e.target.value);
  };

  // API request for the color name
  const apiURL = `https://api.color.pizza/v1/?values=${colorSelected.slice(1)}`;

  const [nameColor, setNameColor] = useState("");

  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        const name = res.data.paletteTitle;
        setNameColor(name);
      })
      .catch((err) => {
        "ERROR", err;
      });
  }, []);

  // API request for color scheme

  const [newPalette, setNewPalette] = useState([]);

  const colorScheme = `https://www.thecolorapi.com/scheme?hex=${colorSelected.slice(
    1
  )}&format=JSON&mode=monochrome`;

  useEffect(() => {
    axios
      .get(colorScheme)
      .then((res) => {
        const colors = res.data.colors.map((color) => color.hex.value);
        setNewPalette(colors);
      })
      .catch((err) => {
        "ERROR", err;
      });
  }, []);

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

  // select the input when is clicked

  const inputRef = useRef(null);
  const handleInputSelected = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <>
      <section className="flex justify-center">
        <div className="rounded-xl p-2 text-center flex justify-center items-center bg-white text-black">
          <div id="color-picker-container">
            <input type="color" value={colorSelected} onChange={newColor} />
          </div>

          <input
            type="text"
            ref={inputRef}
            value={colorSelected}
            className="font-medium"
            placeholder="Hexcode"
            onChange={newColor}
            onClick={handleInputSelected}
          />
        </div>
      </section>
      <h1 className="text-white my-3 p-2 font-bold text-lg">{nameColor}</h1>
      {newPalette.map((color, idx) => (
        <ul key={idx}>
          <input type="color" value={color} onChange={newColor} />
        </ul>
      ))}
    </>
  );
};

export default Palette;
