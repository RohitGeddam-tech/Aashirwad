import React from "react";
import Navbar from "../Desktop/Home/Navbar";
import Footer from "../Desktop/Home/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
