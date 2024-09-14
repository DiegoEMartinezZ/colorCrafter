import React, { useContext } from "react";
import Subtitle from "../../txt/Subtitle";
import ExampleBtn from "../buttons/ExampleBtn";
import { ThemeContext } from "../../../context/ThemeContext";

const ExamButtonsFlatColor = () => {
  const { newPalette } = useContext(ThemeContext);

  return (
    <section className="p-8 flex flex-col w-72 h-auto m-1 rounded-xl justify-around bg-light  border-2 border-dark/20">
      <Subtitle name={"Buttons: Flat Colors"} />
      <div className="flex flex-col items-center">
        <ExampleBtn
          bg={newPalette[5]}
          color={newPalette[0]}
          border={newPalette[0]}
          borderWidth={"1px"}
          name={"Default"}
        />

        <ExampleBtn
          bg={newPalette[0]}
          color={newPalette[5]}
          border={newPalette[5]}
          borderWidth={"1px"}
          name={"Hover"}
        />

        <ExampleBtn
          bg={newPalette[5]}
          color={newPalette[1]}
          border={newPalette[1]}
          borderWidth={"1px"}
          name={"Active"}
        />

        <ExampleBtn
          bg={newPalette[5]}
          color={newPalette[3]}
          border={newPalette[3]}
          borderWidth={"1px"}
          name={"Disabled"}
        />
      </div>
    </section>
  );
};

export default ExamButtonsFlatColor;
