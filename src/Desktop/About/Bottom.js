import React from "react";
import line from "./Photos/Line2.jpg";
import "./css/Bottom.css";
import last from './Photos/lastpage.jpg'

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="bottomContainer">
        <div className="bottomHeading">
          <h1>CERTIFICATES & ACCOMPLISHMENTS</h1>
          <img src={line} alt="line" />
        </div>
        <div className='slider'>
          <div className='imgOverflow'>
              <img loading='lazy' src={last} alt='last'/>
              <img loading='lazy' src={last} alt='last'/>
              <img loading='lazy' src={last} alt='last'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
