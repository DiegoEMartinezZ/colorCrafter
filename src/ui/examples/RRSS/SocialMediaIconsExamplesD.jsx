import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Icons from "../../RRSS/Icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const SocialMediaIconsExamplesD = () => {
  const { newPalette } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{ backgroundColor: "white", color: newPalette[0] }}
        className="p-8 flex my-2 flex-col w-80 h-auto m-1 rounded-xl justify-center"
      >
        <div className="flex justify-center items-start">
          <Icons icon={faInstagram} />
          <Icons icon={faFacebook} />
          <Icons icon={faYoutube} />
          <Icons icon={faWhatsapp} />
        </div>
      </div>
    </>
  );
};

export default SocialMediaIconsExamplesD;
