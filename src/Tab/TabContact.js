import React from "react";
import "../Mobile/css/MobContact.css";
import call from "../Photos/call1.jpg";
import email from "../Photos/email1.jpg";
import location from "../Photos/location1.jpg";
import MobHeading from "../Utils/MobHeading";

const TabContact = () => {
  return (
    <div className="mobcontact" id="contact">
      <MobHeading text="Contact Us" name="mobcontHeading" />
      <div className="mobcontactInfo">
        <div className="tabFlex">
          <div className="tabcontactBox">
            <a href="tel:+91 22 2671 1340" className="imagemob">
              <img src={call} alt="call" />
            </a>
            <a href="tel:+91 22 2671 1340">+912226711340</a>
          </div>
          <div className="tabcontactBox">
            <a href="mailto:contact@aashirwadlabs.com" className="imagemob">
              <img src={email} alt="email" />
            </a>
            <a href="mailto:contact@aashirwadlabs.com">
              contact@aashirwadlabs.com
            </a>
          </div>
        </div>
        <div className="tabcontactBoxmap">
          <a href="https://goo.gl/maps/mEUdamwgNEbd6Ddh8" className="imagemob">
            <img src={location} alt="location" />
          </a>
          <a href="https://goo.gl/maps/mEUdamwgNEbd6Ddh8">
            Bldg No 108, Ground Floor, Heera Nav Jeevan Society, Pant Nagar,
            Ghatkopar (E), Mumbai, Maharashtra - 75
          </a>
        </div>
      </div>
    </div>
  );
};

export default TabContact;
