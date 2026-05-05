import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully Log Out");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link to="/Coverage">Coverage</Link>
      </li>
      <li>
        <Link to="/about">AboutUs</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <Link to="/rider">Be a Rider</Link>
      </li>
      <li>
        <Link to="/send-parcel">Send Parcel</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/dashboard/my-parcels">Dashboard</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="rounded-2xl navbar bg-white shadow-sm">
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <ul>{links}</ul>
            <div className="flex flex-col gap-2">
              {user ? (
                <button className="btn bg-white text-gray-800 rounded-lg">
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-white text-gray-800 rounded-lg"
                >
                  Sign In
                </Link>
              )}

              <Link
                to="/rider"
                className="btn btn-primary text-black rounded-lg"
              >
                Be a Rider
              </Link>
            </div>
          </div>
        </div>
        <div className="text-xl cursor-pointer">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl text-gray-500 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end md:flex gap-2 hidden">
        {user ? (
          <>
            <img
              className="border-2 border-blue-600 rounded-full w-12 h-12"
              src={user?.photoURL}
              alt=""
            />
            <button
              onClick={handleLogOut}
              className="btn bg-white text-gray-800 rounded-lg"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn bg-white text-gray-800 rounded-lg">
            Sign In
          </Link>
        )}
        <Link to="/rider" className="btn btn-primary text-black rounded-lg">
          Be a Rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
