import React from "react";
import { Link } from "react-router-dom";

const DemoButton = ({ text, view }) => {
  return (
    <button className="cursor-pointer text-sm font-semibold text-black rounded-xl bg-aquamarine-400 px-5 p-2">
      <Link to={view}> {text} </Link>
    </button>
  );
};

export default DemoButton;
