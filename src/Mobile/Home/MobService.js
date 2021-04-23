import React from "react";
import "../css/MobService.css";
import Overflow from "../../Utils/Overflow";
import MobHeading from "../../Utils/MobHeading";

const MobService = () => {
  return (
    <div className="service">
      <div className="serviceContainer">
        <MobHeading text="service" name="mobserviceHeading" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mobOverflow">
          <Overflow />
        </div>
      </div>
    </div>
  );
};

export default MobService;
