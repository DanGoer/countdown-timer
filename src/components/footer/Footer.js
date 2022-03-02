import React from "react";
import "../../index.css";
import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <img src={facebook} alt="Social-media-icon" />
      <img src={pinterest} alt="Social-media-icon" />
      <img src={instagram} alt="Social-media-icon" />
    </footer>
  );
}

export default Footer;
