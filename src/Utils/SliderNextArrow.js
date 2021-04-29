import React from "react";

const SliderNextArrow = (props) => {

    const { onClick } = props;

  return (
      <button
        type="button"
        data-role="none"
        className="slick-arrow slickNext"
        style={{display: 'block'}}
        onClick={onClick}
      >
        <span>
          <i className="big chevron right icon"></i>
        </span>
      </button>
  );
};

export default SliderNextArrow;
