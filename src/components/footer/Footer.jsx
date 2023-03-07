import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="socialIcons">
          <a href="https://www.facebook.com/AmrAljohary2001" target="blank">
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.instagram.com/amr_aljohary/" target="blank">

            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://twitter.com/3mrAljohary?t=jMZlToBuEHuWie3p88y3BA&s=09"
            target="blank"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a href="#" target="blank">

            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
