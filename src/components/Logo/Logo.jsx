import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <div className="flex items-center gap-0 ">
      <img src={logo} alt="" />
      <h3 className="h-6 font-bold text-[32px] px-0 mx-0 relative -left-2 -top-1 ">
        zapShift
      </h3>
    </div>
  );
};

export default Logo;
