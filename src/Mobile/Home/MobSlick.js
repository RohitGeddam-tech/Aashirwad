import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scrn from "../../Photos/offers2.jpg";
import { NavHashLink } from "react-router-hash-link";
import Button from "../../Utils/Button";

const SliderContent = () => {
  return (
    <div className="OffersSlide">
      <img src={scrn} alt='offersImage'/>
      <h3>Test Name</h3>
      <h4>Rs.600</h4>
      <p>Kristy is an art director living in New York.</p>
      <div className="bannerBtn">
        <NavHashLink to='/Aashirwad/Form#top'><Button text="book now" /></NavHashLink>
      </div>
    </div>
  );
};

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="boxslick">
      <Slider {...settings}>
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
      </Slider>
    </div>
  );
};

export default SlickSlider;
