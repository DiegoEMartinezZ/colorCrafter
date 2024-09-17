import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ImgHighlight = () => {
  const { newPalette } = useContext(ThemeContext);
  return (
    <section>
      <div className="relative w-80 h-auto m-3">
        <img
          src="/img/photoPeople.jpg"
          alt="Photo"
          className="rounded-xl h-full w-full object-cover"
        />
        <div
          style={{ opacity: 0.5 }}
          className="absolute inset-0  bg-opacity-40 rounded-xl flex items-center justify-center"
        >
          <h1
            style={{ backgroundColor: newPalette[5], color: newPalette[0] }}
            className="text-light m-4 rounded-lg font-bold text-4xl p-5 uppercase"
          >
            Your title here
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ImgHighlight;
