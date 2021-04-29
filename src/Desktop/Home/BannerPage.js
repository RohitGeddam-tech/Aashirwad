import React from "react";
import cover from "../../Photos/deskcover.jpg";
import ButtonMod from "../../Utils/ButtonMod";
import "../css/banner.css";

const BannerPage = () => {
  return (
    <div className="banner">
      <img loading='lazy' src={cover} alt="cover" />
      <div className="absoluteBox">
        <div className="whitebox">
          <h1>Banner Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet.
          </p>
          <div className="bannerBtn">
            <ButtonMod text="book an appointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
