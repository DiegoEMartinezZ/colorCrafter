import React, { useContext } from "react";
import ExampleBtn from "../buttons/ExampleBtn";
import { ThemeContext } from "../../../context/ThemeContext";

const ExamButtonsFlatColor = () => {
  const { newPalette } = useContext(ThemeContext);

  return (
    <section className="flex flex-col w-80 h-auto m-1 rounded-xl justify-around p-4 bg-light border-2 border-dark/20">
      <h3 className="font-medium my-2">Buttons: Flat Colors </h3>
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
