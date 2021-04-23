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
        </div>
        <div className="mobFooterIcons">
          <img src={fb} alt="fb" />
          <img src={insta} alt="insta" />
          <img src={linked} alt="linkedin" />
        </div>
        <div className="mobFooterCopy">
          <img src={copy} alt="copyright" />
        </div>
      </div>
    </div>
  );
};

export default MobFooter;
