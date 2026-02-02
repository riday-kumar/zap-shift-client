import React from "react";
import Logo from "../../../components/Logo/Logo";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="space-y-5 py-10 rounded-2xl bg-black text-white flex flex-col items-center justify-center">
      <div className="relative">
        <Logo></Logo>
      </div>
      {/* text */}
      <p className="text-center w-[90%] md:w-[60%]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>
      {/* menu */}
      <div className="py-5 border-y border-dashed w-[60%]">
        <ul className="flex max-md:flex-col justify-center items-center gap-5">
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
      {/* social icons */}
      <div className="py-5">
        <ul className="flex text-3xl justify-center items-center gap-5">
          <li className="bg-blue-600 p-2 rounded-full text-white">
            <a href="">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="bg-blue-600 p-2 rounded-full text-white">
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li className="bg-white p-2 rounded-full text-black">
            <a href="">
              <FaXTwitter />
            </a>
          </li>
          <li className="bg-red-600 p-2 rounded-full text-white">
            <a href="">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
