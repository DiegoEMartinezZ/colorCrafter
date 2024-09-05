import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Title = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h1
      className={`${
        theme === "light" ? "text-black" : "text-light"
      } text-4xl font-semibold my-1 p-2`}
    >
      {name}
    </h1>
  );
};

export default Title;
