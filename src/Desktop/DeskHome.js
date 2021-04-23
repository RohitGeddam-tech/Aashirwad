import React from "react";
import Layout from "../Utils/Layout";
import AboutUs from "./Home/AboutUs";
import BannerPage from "./Home/BannerPage";
import Contact from "./Home/Contact";
import Offers from "./Home/Offers";
import Service from "./Home/Service";

const View = () => {
  return (
    <Layout>
      <BannerPage />
      <AboutUs />
      <Service />
      <Offers />
      <Contact />
    </Layout>
  );
};

const Desktop = () => {
  return <View />;
};

export default Desktop;