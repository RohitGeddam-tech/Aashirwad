import React from "react";
import flag from "../../Desktop/About/Photos/flag.svg";
import vision from "../../Desktop/About/Photos/vision.svg";
import line from "../../Photos/Line2.jpg";
import MobHeading from "../../Utils/MobHeading";
import "./MobFirst.css";

const MobFirst = () => {
  return (
    <div className="first">
      <MobHeading text="About us" name="firstHeading" />
      <div className="mobouterbox">
        <div className="mobinnerbox1">
          <img src={flag} alt="flag" />
          <h2>OUR MISSION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src={line} alt="line" />
        <div className="mobinnerbox1">
          <img src={vision} alt="vision" />
          <h2>OUR vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobFirst;
