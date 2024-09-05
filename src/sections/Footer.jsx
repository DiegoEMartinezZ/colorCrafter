import React, { useContext } from "react";
import SocialMedia from "../components/SocialMedia";
import {
  faBehance,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <footer
        className={`text-${
          theme === "light" ? "dark" : "light"
        } absolute bottom-0 right-0 left-0 text-center p-5 text-xs italic font-light`}
      >
        <div className="p-3 flex justify-around">
          <SocialMedia
            name={faInstagram}
            url={"https://www.instagram.com/lowoncyan_"}
          />
          <SocialMedia
            name={faLinkedin}
            url={"https://www.linkedin.com/in/diegomz/"}
          />
          <SocialMedia
            name={faBehance}
            url={"https://www.behance.net/lowoncyan_"}
          />
        </div>
        <h4> Diego Martínez - 2024 </h4>
      </footer>
    </>
  );
};

export default Footer;
