import React from "react";

const BtnColorMode = ({ name, handler }) => {
  return (
    <button
      className="lg:hidden font-base px-3 py-1 m-auto rounded-full bg-aquamarine-200 cursor-pointer"
      onClick={handler}
    >
      {name}
    </button>
  );
};

export default BtnColorMode;
