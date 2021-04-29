import React,{useState, useEffect, Suspense, lazy} from 'react'
// import DeskAbout from '../Desktop/DeskAbout'
// import MobAboutPage from "../Mobile/MobAboutPage";

const DeskAbout = lazy(()=>import('../Desktop/DeskAbout'))
const MobAboutPage = lazy(()=>import('../Mobile/MobAboutPage'))

const About = () => {
    const [isMobile, setMobile] = useState(window.matchMedia("(max-width:800px)").matches);
    useEffect(() => {
      window.addEventListener("resize", () => {
        setMobile(window.matchMedia("(max-width:800px)").matches);
      });
    });
  
    const [isDesktop, setDesktop] = useState(window.matchMedia("(max-width:1400px)").matches);
    useEffect(() => {
      window.addEventListener("resize", () => {
        setDesktop(window.matchMedia("(max-width:1400px)").matches);
      });
    });

    return (
        <Suspense fallback={<div className='load'>Loading...</div>}>
            {isDesktop ? <>{isMobile ? <MobAboutPage /> : <DeskAbout />}</> : <DeskAbout />}
        </Suspense>
    )
}

export default About