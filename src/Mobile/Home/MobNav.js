import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import Hamburger from "hamburger-react";
import logo from "../../Photos/logo.svg";
import "../css/MobNav.css";
import { Collapse } from "@material-ui/core";
import Button from "../../Utils/Button";

const MobNav = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <div className="nav">
        <nav className="containerNav">
          <div className="start"></div>
          <div className="navImage">
            <NavHashLink
              to="/Aashirwad#top"
              onClick={() => {
                setActive(false);
              }}
            >
              <img src={logo} alt="logo" />
            </NavHashLink>
          </div>
          <button
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Hamburger
              direction="left"
              className="ham"
              duration={0.2}
              color="black"
              toggled={isActive}
              toggle={setActive}
            />
          </button>
        </nav>
        <Collapse in={isActive} className="colapse">
          <NavHashLink to="/Aashirwad/About#top" className="navfade">
            About US
          </NavHashLink>
          <NavHashLink to="/Aashirwad/Path#top" className="navfade">
            Pathology Equipments
          </NavHashLink>
          <NavHashLink
            onClick={() => {
              setActive(!isActive);
            }}
            to="/Aashirwad#contact"
            className="navfade"
          >
            Contact Us
          </NavHashLink>
          <div className="buttonAlign">
            <Button text="book an Appointment" />
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default MobNav;
