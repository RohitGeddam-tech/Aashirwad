import React from "react";
import banner from "../../Photos/mobcover.png";
import "../css/MobBanner.css";
import MobSlider from "./MobSlider";

const MobBanner = () => {
  return (
    <div className="mobBanner">
      <div className="absoluteMob">
        <MobSlider />
      </div>
      <img src={banner} alt="banner" />
    </div>
  );
};

export default MobBanner;
