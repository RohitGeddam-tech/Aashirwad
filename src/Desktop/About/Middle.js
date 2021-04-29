import React from "react";
import line from "./Photos/Line3.jpg";
import doc from "./Photos/doc.jpg";
import "./css/Middle.css";

const Middle = () => {
  return (
    <div className="middle">
      <div className="middleContainer">
        <div className="left">
          <div className="middleHeading">
            <h1>DOCTOR’S MESSAGE</h1>
            <img loading='lazy' src={line} alt="line" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit,. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit,. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,.
          </p>
        </div>
        <div className="right">
          <img loading='lazy' src={doc} alt="doc" />
          <h2>Dr. Tushar Desai</h2>
        </div>
      </div>
    </div>
  );
};

export default Middle;
