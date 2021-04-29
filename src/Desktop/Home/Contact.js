import React from "react";
import LineHeading from "../../Utils/LineHeading";
import line from "../../Photos/Line2.jpg";
import call from "../../Photos/call1.jpg";
import email from "../../Photos/email1.jpg";
import location from "../../Photos/location1.jpg";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <LineHeading text="Contact Us" name="contactHeading" line={line} />
        <div className="contactInfo">
          <div className="contactBox">
            <a href="tel:+91 22 2671 1340">
              <img loading='lazy' src={call} alt="call" />
            </a>
            <a href="tel:+91 22 2671 1340">+912226711340</a>
          </div>
          <div className="contactBox">
            <a href="mailto:contact@aashirwadlabs.com">
              <img loading='lazy' src={email} alt="email" />
            </a>
            <a href="mailto:contact@aashirwadlabs.com">
              contact@aashirwadlabs.com
            </a>
          </div>
          <div className="contactlocBox">
            <a href="https://goo.gl/maps/mEUdamwgNEbd6Ddh8">
              <img loading='lazy' src={location} alt="location" />
            </a>
            <a href="https://goo.gl/maps/mEUdamwgNEbd6Ddh8">
              Bldg No 108, Ground Floor, Heera Nav Jeevan Society, Pant Nagar,
              Ghatkopar (E), Mumbai, Maharashtra - 75
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
