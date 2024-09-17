import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ShortText = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <p
      className={`text-${
        theme === "light" ? "dark" : "light"
      } font-normal text-base text-center p-2 w-11/12 m-auto sm:w-1/2 lg:w-1/3 rounded-xl block border-2`}
    >
      {text}
    </p>
  );
};

export default ShortText;
