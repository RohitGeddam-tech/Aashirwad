import React from "react";
import { NavHashLink } from "react-router-hash-link";
import fb from "../../Photos/fb.svg";
import linked from "../../Photos/Linkedin.svg";
import insta from "../../Photos/instagram.svg";
import copy from "../../Photos/copy.svg";
import "../css/MobFooter.css";

const MobFooter = () => {
  return (
    <div className="mobFooter">
      <div className="mobFooterContainer">
        <div className="mobFooterLinks">
          <NavHashLink to="/Aashirwad/About#top">ABOUT US</NavHashLink>
          <NavHashLink to="/Aashirwad/Path#top">
            PATHOLOGICAL EQUIPMENTS
          </NavHashLink>
          <NavHashLink to="/#contact">CONTACT US</NavHashLink>
          <NavHashLink to="/#contact">PRIVACY POLICY</NavHashLink>
          <NavHashLink to="/#contact">TERMS & CONDITIONS</NavHashLink>
        </div>
        <div className="mobFooterIcons">
          <img loading='lazy' src={fb} alt="fb" />
          <img loading='lazy' src={insta} alt="insta" />
          <img loading='lazy' src={linked} alt="linkedin" />
        </div>
        <div className="mobFooterCopy">
          <img loading='lazy' src={copy} alt="copyright" />
        </div>
      </div>
    </div>
  );
};

export default MobFooter;
