import React from "react";
import doc from "../../Desktop/About/Photos/doc.svg";
import MobHeading from "../../Utils/MobHeading";
import "./MobMiddle.css";

const MobMiddle = () => {
  return (
    <div className="mobmiddle">
      <MobHeading text="doctor's message" name="mobmiddleHeading" />
      <img src={doc} alt="doc" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit,. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit,. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
      </p>
      <h2>Dr. Tushar Desai</h2>
    </div>
  );
};

export default MobMiddle;
