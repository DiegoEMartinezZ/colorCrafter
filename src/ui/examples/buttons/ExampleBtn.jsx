import React from "react";

const ExampleBtn = ({ bg, color, border, borderWidth, name }) => {
  return (
    <button
      className="p-2 my-2 px-5 font-medium w-2/3 rounded-xl  cursor-pointer"
      style={{
        background: bg,
        color: color,
        borderBlockColor: border,
        borderWidth: borderWidth,
      }}
    >
      {name}
    </button>
  );
};

export default ExampleBtn;
