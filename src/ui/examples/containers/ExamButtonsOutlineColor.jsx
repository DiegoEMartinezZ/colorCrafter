import React, { useContext } from "react";
import ExampleBtn from "../buttons/ExampleBtn";
import { ThemeContext } from "../../../context/ThemeContext";

const ExamButtonsOutlineColor = () => {
  const { newPalette } = useContext(ThemeContext);

  return (
    <div className="flex flex-col w-80 p-4 h-auto rounded-xl m-1 justify-around bg-light  border-2 border-dark/20 ">
      <h3 className="font-medium my-2">Buttons: Outline </h3>
      <div className="flex flex-col items-center ">
        <ExampleBtn
          color={newPalette[0]}
          border={newPalette[0]}
          borderWidth={"1px"}
          name={"Default"}
        />

        <ExampleBtn
          color={newPalette[5]}
          border={newPalette[5]}
          borderWidth={"1px"}
          name={"Hover"}
        />

        <ExampleBtn
          color={newPalette[1]}
          border={newPalette[1]}
          borderWidth={"1px"}
          name={"Active"}
        />

        <ExampleBtn
          color={newPalette[3]}
          border={newPalette[3]}
          borderWidth={"1px"}
          name={"Disabled"}
        />
      </div>
    </div>
  );
};

export default ExamButtonsOutlineColor;
