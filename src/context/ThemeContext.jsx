import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Dark Mode toggle
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // select the input when is clicked

  const inputRef = useRef(null);
  const handleInputSelected = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
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

  const [colorSelected, setColorSelected] = useState(newRandomColor());

  //handler for spacebar
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
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

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        inputRef,
        handleInputSelected,
        newPalette,
        getColor,
        colorSelected,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
