import React from "react";
import flag from "./Photos/flag.svg";
import vision from "./Photos/vision.svg";
import './css/FirstAbout.css'

const FirstAbout = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutHeading">
          <h1>About Us</h1>
        </div>
        <div className="outerbox">
          <div className="innerbox1">
            <img style={{ marginTop: "30px" }} src={flag} alt='flag' />
            <h2 className="boxtitle">OUR MISSION</h2>
            <p className="boxtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="dashed"></div>
          <div className="innerbox2">
            <img style={{ marginTop: "30px" }} src={vision} alt='vision' />
            <h2 className="boxtitle">OUR vision</h2>
            <p className="boxtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAbout;
