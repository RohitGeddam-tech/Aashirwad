import React from "react";
import "../css/Offers.css";
import line from "../../Photos/Line2.jpg";
import SlickSlider from "./SlickSlider";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offersContainer">
        <div className="offersHeading">
          <img src={line} alt="line" />
          <h1>Offers</h1>
          <img src={line} alt="line" />
        </div>
        <SlickSlider />
      </div>
    </div>
  );
};

export default Offers;
