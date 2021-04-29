import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import last from "../../Desktop/About/Photos/lastpage.svg";

const ImgSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="imgslick">
      <Slider {...settings}>
        <img loading='lazy' src={last} alt='last'/>
        <img loading='lazy' src={last} alt='last'/>
        <img loading='lazy' src={last} alt='last'/>
      </Slider>
    </div>
  );
};

export default ImgSlider;
