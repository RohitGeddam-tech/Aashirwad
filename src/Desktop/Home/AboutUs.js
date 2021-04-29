import React from "react";
import "../css/AboutUs.css";
import doc from "../../Photos/offers.jpg";
import line from "../../Photos/Line2.jpg";
import Button from "../../Utils/Button";
import {NavHashLink} from "react-router-hash-link";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutusContainer">
        <div className="aboutusImage">
          <img loading='lazy' src={doc} alt="doctor" />
        </div>
        <div className="aboutusInfo">
          <div className="aboutusHeading">
            <h1>About Us</h1>
            <img loading='lazy' src={line} alt="line" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="aboutusButton">
            <NavHashLink to='/Aashirwad/About#top'><Button text="read more" /></NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
