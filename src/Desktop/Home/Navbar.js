import React from "react";
import logo from "../../Photos/logo.svg";
import { NavHashLink } from "react-router-hash-link";
import "../css/Navbar.css";
import ButtonMod from "../../Utils/ButtonMod";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div>
          <NavHashLink to="/Aashirwad#top">
            <img src={logo} alt="logo" />
          </NavHashLink>
        </div>
        <div className="navbarLinks">
          <NavHashLink
            to="/Aashirwad/About#top"
            activeStyle={{ color: "#092f57", fontWeight: "600" }}
          >
            About
          </NavHashLink>
          <NavHashLink
            to="/Aashirwad/Path#top"
            activeStyle={{ color: "#092f57", fontWeight: "600" }}
          >
            Pathological Equipments
          </NavHashLink>
          <NavHashLink
            to="/Aashirwad#contact"
            activeStyle={{ color: "#092f57", fontWeight: "600" }}
          >
            Contact Us
          </NavHashLink>
          <div className="buttonAlign">
            <ButtonMod text="Book an appointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
