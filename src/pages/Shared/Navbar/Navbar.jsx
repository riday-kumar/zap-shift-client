import React from "react";
import Logo from "../../../components/Logo/Logo";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <ul>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Coverage</a>
              </li>
              <li>
                <a href="">AboutUs</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Be a Rider</a>
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <a className="btn bg-white text-gray-800 rounded-lg">Sign In</a>
              <a className="btn btn-primary text-black rounded-lg">
                Be a Rider
              </a>
            </div>
          </div>
        </div>
        <a className="text-xl cursor-pointer">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl text-gray-500 px-1">
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Coverage</a>
          </li>
          <li>
            <a href="">AboutUs</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Be a Rider</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:flex gap-2 hidden">
        <a className="btn bg-white text-gray-800 rounded-lg">Sign In</a>
        <a className="btn btn-primary text-black rounded-lg">Be a Rider</a>
      </div>
    </div>
  );
};

export default Navbar;
