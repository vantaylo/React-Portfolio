import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://github.com/vantaylo" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/vanessalyn-taylor/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/VanessaL_Taylor" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
