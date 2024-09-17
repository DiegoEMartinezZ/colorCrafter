import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const DataContrast = () => {
  const { newPalette } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{ backgroundColor: newPalette[0], color: newPalette[5] }}
        className="p-8 flex flex-col my-2 w-80 h-auto m-1 rounded-xl justify-center bg-gradient-to-t from-dark border-1 border-dark/20"
      >
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-5xl">$321K</h1>
          <h4 className="font-medium text-base"> +6.42% </h4>
          <h4 className="font-normal text-sm">VS Previous Month</h4>
        </div>
      </div>
    </>
  );
};

export default DataContrast;
