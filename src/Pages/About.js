import React,{useState, useEffect} from 'react'
import DeskAbout from '../Desktop/DeskAbout'
import MobAboutPage from "../Mobile/MobAboutPage";

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
        <>
            {isDesktop ? <>{isMobile ? <MobAboutPage /> : <DeskAbout />}</> : <DeskAbout />}
        </>
    )
}

export default About