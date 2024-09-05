import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ShortText = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <p
      className={`text-${
        theme === "light" ? "dark" : "light"
      } m-3 px-3 font-base text-sm`}
    >
      {text}
    </p>
  );
};

export default ShortText;
