import React, { createContext, useRef, useState } from "react";

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

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, inputRef, handleInputSelected }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
