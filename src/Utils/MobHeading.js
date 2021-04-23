import React from "react";

const MobHeading = ({ text, name, line }) => {
  return (
    <>
      <div className={name}>
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default MobHeading;
