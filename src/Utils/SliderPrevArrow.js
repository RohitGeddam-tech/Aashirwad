import React from "react";

const SliderPrevArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slickPrev"
      style={{display: 'block'}}
      onClick={onClick}
    >
      <span>
        <i className="big chevron left icon"></i>
      </span>
    </button>
  );
};

export default SliderPrevArrow;
