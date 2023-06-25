import React from "react";
import Navbar from "../global/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../global/Footer";

const OpenLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default OpenLayout;
