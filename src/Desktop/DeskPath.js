import React from "react";
import Layout from "../Utils/Layout";
import './DeskPath.css'
import PathData from '../Utils/Pathdata'

const DeskPath = () => {
  return (
    <Layout>
      <div className="path" style={{paddingTop:'70px'}}>
        <div className="pathContainer">
          <div className="pathHeading">
            <h1>PATHOLOGICAL EQUIPMENTS</h1>
          </div>
          <div className='pathData'>
              {PathData.map(doc=>(
                  <div key={doc.id} className='dataBox'>
                      <img loading='lazy' src={doc.image} alt={doc.title} />
                      <h1>{doc.title}</h1>
                      <p>{doc.para}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeskPath;
