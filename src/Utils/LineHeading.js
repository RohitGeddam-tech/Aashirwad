import React from "react";

const LineHeading = ({ text, name, line }) => {
  return (
    <>
      <div className={name}>
        <img src={line} alt="line" />
        <h1>{text}</h1>
        <img src={line} alt="line" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
    </>
  );
};

export default LineHeading;
