import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import Form from "./FormDesk";

const ButtonMod = ({ text }) => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-height:600px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-height:600px)").matches);
    });
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      {isMobile ?
      <><NavHashLink to='/Aashirwad/Form'><button className="button">{text}</button></NavHashLink></> :
      <><button className="button" onClick={()=>{setOpen(true)}}>{text}</button>
      <Form setOpen={setOpen} open={open}/></> }
    </>
  );
};

export default ButtonMod;