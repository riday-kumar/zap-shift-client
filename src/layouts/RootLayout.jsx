import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import MaxWidth from "../pages/Shared/MaxWidth/MaxWidth";

const RootLayout = () => {
  return (
    <MaxWidth>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </MaxWidth>
  );
};

export default RootLayout;
