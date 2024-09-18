import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Dark Mode toggle
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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

  const [colorSelected, setColorSelected] = useState(newRandomColor);

  //handler for spacebar to get a random color
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      setColorSelected(newRandomColor);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // handler for button 'Random' for random color when smarthphone

  const randomColor = (e) => {
    e.preventDefault();
    setColorSelected(newRandomColor);
  };

  useEffect(() => {
    randomColor;
  }, []);

  // Get the value of the color input

  const getColor = (e) => {
    const currentColorValue = e.target.value;

    if (/^#[0-9A-Fa-f]{0,6}$/i.test(currentColorValue)) {
      setColorSelected(currentColorValue);
    }

    console.log(currentColorValue);
  };

  // API request for color scheme
  const [newPalette, setNewPalette] = useState([]);

  useEffect(() => {
    const paletteColor = () => {
      const searchColor = colorSelected.slice(1);
      let colorSchemeURL = `https://www.thecolorapi.com/scheme?hex=${searchColor}&format=JSON&mode=monochrome&count=6`;

      axios
        .get(colorSchemeURL)
        .then((res) => {
          const colors = res.data.colors.map((color) => color.hex.value);
          setNewPalette(colors);
          console.log(colorSchemeURL);
        })
        .catch((err) => {
          "ERROR", err;
        });
    };
    paletteColor();
  }, [colorSelected]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        newPalette,
        getColor,
        colorSelected,
        randomColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
