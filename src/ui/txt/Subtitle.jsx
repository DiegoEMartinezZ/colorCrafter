import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Subtitle = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h2
      className={`text-${
        theme === "light" ? "dark" : "dark"
      } font-semibold text-base p-1`}
    >
      {" "}
      {name}{" "}
    </h2>
  );
};

export default Subtitle;
