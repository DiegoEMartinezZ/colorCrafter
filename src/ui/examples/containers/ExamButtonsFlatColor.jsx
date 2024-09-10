import React, { useContext } from "react";
import Subtitle from "../../txt/Subtitle";
import ExampleBtn from "../buttons/ExampleBtn";
import { ThemeContext } from "../../../context/ThemeContext";

const ExamButtonsFlatColor = () => {
  const { newPalette } = useContext(ThemeContext);

  return (
    <div className=" flex flex-col w-3/4 m-1 rounded-xl justify-around bg-light  border-2 border-dark/20 p-5">
      <Subtitle name={"Buttons: Flat Colors"} />
      <div className="flex flex-col items-center ">
        <ExampleBtn
          bg={newPalette[5]}
          color={newPalette[0]}
          border={newPalette[0]}
          name={"Default"}
        />

        <ExampleBtn
          bg={newPalette[0]}
          color={newPalette[5]}
          border={newPalette[5]}
          name={"Hover"}
        />

        <ExampleBtn
          bg={newPalette[5]}
          color={newPalette[1]}
          border={newPalette[1]}
          name={"Active"}
        />

        <ExampleBtn
          bg={newPalette[5]}
          color={newPalette[3]}
          border={newPalette[3]}
          name={"Disabled"}
        />
      </div>
    </div>
  );
};

export default ExamButtonsFlatColor;
