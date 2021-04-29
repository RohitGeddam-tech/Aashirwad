import React, { useEffect, useState, lazy, Suspense } from "react";
// import DeskPath from "../Desktop/DeskPath";
// import MobPath from "../Mobile/MobPath";


const DeskPath = lazy(()=>import('../Desktop/DeskPath'))
const MobPath = lazy(()=>import('../Mobile/MobPath'))

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
    <Suspense fallback={<div className='load'>Loading...</div>}>
      {isDesktop ? <>{isMobile ? <MobPath /> : <DeskPath />}</> : <DeskPath />}
    </Suspense>
  );
};

export default Path;
