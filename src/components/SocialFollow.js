import React from "react";
import resumeIcon from "../assets/images/resume-icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="row">

      <a href="https://github.com/vantaylo" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/vanessalyn-taylor/"className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      
    </div>
  );
}
