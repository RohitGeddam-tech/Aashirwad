import React from "react";
import MobFooter from "../Mobile/Home/MobFooter";
import MobNav from "../Mobile/Home/MobNav";

const Layout = ({ children }) => {
  return (
    <>
      <MobNav />
      {children}
      <MobFooter />
    </>
  );
};

export default Layout;