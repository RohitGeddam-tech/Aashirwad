import React from "react";
import "../css/MobAbout.css";
import doc from "../../Photos/offers.jpg";
import Button from "../../Utils/Button";
import { NavHashLink } from "react-router-hash-link";
import MobHeading from "../../Utils/MobHeading";

const MobAbout = () => {
  return (
    <div className="mobabout">
      <div className="mobaboutContainer">
        <MobHeading text="About us" name="mobaboutHeading" />
        <img loading='lazy' src={doc} alt="doctor" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mobaboutButton">
          <NavHashLink to="/Aashirwad/About#top">
            <Button text="read more" />
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default MobAbout;
