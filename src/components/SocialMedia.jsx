import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialMedia = ({ name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={name}></FontAwesomeIcon>
    </a>
  );
};

export default SocialMedia;
