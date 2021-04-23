import React from "react";
import "../css/Service.css";
import Overflow from "../../Utils/Overflow";
import line from "../../Photos/Line3.jpg";
import LineHeading from "../../Utils/LineHeading";

const Service = () => {
  return (
    <div className="service">
      <div className="serviceContainer">
        <LineHeading text='Service' name='serviceHeading' line={line}/>
        <div><Overflow /></div>
      </div>
    </div>
  );
};

export default Service;
