import React from "react";
import Layout from "../Utils/LayoutMob";
import "./MobPath.css";
import PathData from "../Utils/Pathdata";

const DeskPath = () => {
  return (
    <Layout>
      <div className="mobpath">
        <div className="mobpathContainer">
          <div className="mobpathHeading">
            <h1>PATHOLOGICAL EQUIPMENTS</h1>
          </div>
            {PathData.map((doc) => (
              <div key={doc.id} className="mobdataBox">
                <img src={doc.image} alt={doc.title} />
                <h1>{doc.title}</h1>
                <p>{doc.para}</p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default DeskPath;
