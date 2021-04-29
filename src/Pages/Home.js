import React, { useState, useEffect, Suspense, lazy } from "react";
// import DeskHome from "../Desktop/DeskHome";
// import MobHome from "../Mobile/MobHome";
// import TabHome from "../Tab/TabHome";

const DeskHome = lazy(()=>import('../Desktop/DeskHome'))
const MobHome = lazy(()=>import('../Mobile/MobHome'))
const TabHome = lazy(()=>import('../Tab/TabHome'))


const Home = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:600px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:600px)").matches);
    });
  });

  const [isTab, setTab] = useState(
    window.matchMedia("(max-width:800px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:800px)").matches);
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
      {isDesktop ? <>{isTab ? <>{isMobile ? <MobHome /> : <TabHome />}</>: <DeskHome />}</> : <DeskHome />}
    </Suspense>
  );
};

export default Home;
