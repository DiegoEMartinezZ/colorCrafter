import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Subtitle = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h2
      className={`text-${
        theme === "light" ? "light" : "dark"
      } font-semibold text-2xl p-1`}
    >
      {" "}
      {name}{" "}
    </h2>
  );
};

export default Subtitle;
