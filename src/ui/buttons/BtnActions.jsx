import React from "react";

const BtnActions = ({ name, handler }) => {
  return (
    <button
      className="lg:hidden font-base  absolute right-0 px-3 py-1 mr-3 rounded-full bg-aquamarine-200 cursor-pointer"
      onClick={handler}
    >
      {name}
    </button>
  );
};

export default BtnActions;
