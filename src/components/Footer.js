import React from "react";
import Row from "react-bootstrap/Row";
import SocialFollow from "./SocialFollow";

function Footer() {
  return (
    <footer>
      <div>
        <SocialFollow/>
        <Row>
          <a
              href="mailto:vanessalyn.taylor@gmail.com"
              className="footer__link"
          >
              vanessalyn.taylor@gmail.com
          </a>
        </Row> 
      </div> 
    </footer>
  );
}

export default Footer;
