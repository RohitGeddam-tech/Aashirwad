import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
import Button from "../../Utils/Button";

const SliderContent = () => {
  return (
    <div className="whitemobbox">
      <h1>Banner Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet.
      </p>
      <div className="bannermobBtn">
        <Button text="book an appointment" />
      </div>
    </div>
  );
};

const MobSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="boxslick">
      <Slider {...settings}>
        <SliderContent />
        <SliderContent />
        <SliderContent />
      </Slider>
    </div>
  );
};

export default MobSlider;
