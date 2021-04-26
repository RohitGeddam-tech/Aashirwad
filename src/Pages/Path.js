import React, { useEffect, useState } from "react";
import DeskPath from "../Desktop/DeskPath";
import MobPath from "../Mobile/MobPath";

const Path = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:800px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:800px)").matches);
    });
  });

  const [isDesktop, setDesktop] = useState(
    window.matchMedia("(max-width:1400px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDesktop(window.matchMedia("(max-width:1400px)").matches);
    });
  });

  return (
    <>
      {isDesktop ? <>{isMobile ? <MobPath /> : <DeskPath />}</> : <DeskPath />}
    </>
  );
};

export default Path;
