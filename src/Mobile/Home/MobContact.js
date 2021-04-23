import React from "react";
import "../css/MobContact.css";
import call from "../../Photos/call1.jpg";
import email from "../../Photos/email1.jpg";
import location from "../../Photos/location1.jpg";
import MobHeading from "../../Utils/MobHeading";

const MobContact = () => {
  return (
    <div className="mobcontact" id="contact">
      <MobHeading text="Contact Us" name="mobaboutHeading" />
      <div className="mobcontactInfo">
        <div className="mobcontactBox">
          <img src={call} alt="call" />
          <a href="tel:+91 22 2671 1340">+912226711340</a>
        </div>
        <div className="mobcontactBox">
          <img src={email} alt="email" />
          <a href="mailto:contact@aashirwadlabs.com">
            contact@aashirwadlabs.com
          </a>
        </div>
        <div className="mobcontactBox">
          <img src={location} alt="location" />
          <a href="tel:+91 22 2671 1340">
            Bldg No 108, Ground Floor, Heera Nav Jeevan Society, Pant Nagar,
            Ghatkopar (E), Mumbai, Maharashtra - 75
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobContact;
