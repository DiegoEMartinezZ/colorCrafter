import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Data = () => {
  const { newPalette } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{ backgroundColor: newPalette[5], color: newPalette[0] }}
        className="p-8 flex my-2 flex-col w-80 h-auto m-1 rounded-xl justify-center bg-gradient-to-t from-light border-1 border-dark/20"
      >
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-5xl">239</h1>
          <h4 className="font-medium text-base"> +34 New Customers</h4>
          <h4 className="font-normal text-sm">VS Previous Month</h4>
        </div>
      </div>
    </>
  );
};

export default Data;
