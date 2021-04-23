import React from "react";
import "./MobBottom.css";
import MobHeading from "../../Utils/MobHeading";
import ImgSlider from "./ImgSlider";

const MobBottom = () => {
  return (
    <div className="mobbottom">
        <MobHeading text='certificates & accomplishments' name='mobaboutHeading' />
        <ImgSlider />
    </div>
  );
};

export default MobBottom;