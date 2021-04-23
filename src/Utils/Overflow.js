import React from "react";
import RawData from "./RawData";

const Overflow = () => {
  return (
    <div className="overflow">
      <div className="overflowContent">
        <div className='overflowAlign'>
          {RawData.map((doc) => (
            <div className="overflowBox" key={doc.id}>
              <img src={doc.image} alt={doc.title} />
              <h3>{doc.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overflow;
