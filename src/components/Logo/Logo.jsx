import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to="/" className="flex justify-center items-center gap-0 relative">
      <img className="" src={logo} alt="" />
      <h3 className="h-6 font-bold text-[32px] px-0 mx-0 absolute left-4 top-2 ">
        zapShift
      </h3>
    </Link>
  );
};

export default Logo;
