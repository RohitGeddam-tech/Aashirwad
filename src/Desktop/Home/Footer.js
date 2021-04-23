import React from "react";
import { NavHashLink } from "react-router-hash-link";
import line from "../../Photos/Line2.jpg";
import fb from "../../Photos/fb.svg";
import linked from "../../Photos/Linkedin.svg";
import insta from "../../Photos/instagram.svg";
import copy from "../../Photos/copy.svg";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLinks">
          <NavHashLink to="/Aashirwad/About#top">ABOUT US</NavHashLink>
          <NavHashLink to="/Aashirwad/Path#top">PATHOLOGICAL EQUIPMENTS</NavHashLink>
          <NavHashLink to="/#contact">CONTACT US</NavHashLink>
          <NavHashLink to="/">PRIVACY POLICY</NavHashLink>
          <NavHashLink to="/">TERMS & CONDITIONS</NavHashLink>
        </div>
        <img src={line} alt="line" />
        <div className="footerIcons">
          <img src={fb} alt="fb" />
          <img src={insta} alt="insta" />
          <img src={linked} alt="linkedin" />
        </div>
        <div className="footerCopy">
          <img src={copy} alt="copyright" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
