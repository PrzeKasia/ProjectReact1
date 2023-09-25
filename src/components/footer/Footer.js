import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer container">
        <p className="footerText">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <span className="instface">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </span>
      </div>
    </footer>
  );
}
