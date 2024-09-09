import React from "react";

const ExampleBtn = ({ bg, color, border, borderWidth }) => {
  return (
    <button
      className="p-2 my-2 px-5 font-semibold rounded-2xl uppercase cursor-pointer"
      style={{
        background: bg,
        color: color,
        borderBlockColor: border,
        borderWidth: borderWidth,
      }}
    >
      Button
    </button>
  );
};

export default ExampleBtn;
