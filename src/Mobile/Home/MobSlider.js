import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavHashLink } from "react-router-hash-link";
import Button from "../../Utils/Button";
import SliderNextArrow from "../../Utils/SliderNextArrow";
import SliderPrevArrow from "../../Utils/SliderPrevArrow";

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
      <NavHashLink to='/Aashirwad/Form'><Button text="book an Appointment" /></NavHashLink>
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
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
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
