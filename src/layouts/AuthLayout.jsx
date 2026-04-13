import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import MaxWidth from "../pages/Shared/MaxWidth/MaxWidth";
const AuthLayout = () => {
  return (
    // <div className="flex justify-center items-center">
    //   {/* left side */}
    //   <div className="flex-1 border-2 border-red-300 bg-white">
    //     <Logo></Logo>
    //     <Outlet></Outlet>
    //   </div>
    //   {/* right side */}
    //   <div className="flex-1">
    //     <img src={authImage} alt="" />
    //   </div>
    // </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-dvh">
      {/* left side */}
      <div className="bg-white max-lg:py-20 flex justify-center items-center">
        <Outlet></Outlet>
      </div>
      {/* right side */}
      <div className="flex justify-center items-center">
        <img src={authImage} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
