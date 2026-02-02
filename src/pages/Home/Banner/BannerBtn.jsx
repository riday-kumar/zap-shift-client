import React from "react";
import { FaShare } from "react-icons/fa";

const BannerBtn = () => {
  return (
    <div className="hidden md:flex flex-row gap-4">
      <div>
        <a
          className="btn btn-md lg:btn-lg btn-primary text-black text-xl font-bold rounded-4xl"
          href=""
        >
          Track Your Parcel
        </a>
        <a
          className="btn btn-md lg:btn-lg rounded-full bg-white text-xl"
          href=""
        >
          <FaShare />
        </a>
      </div>
      {/* 2nd button */}
      <a
        className="btn btn-md lg:btn-lg bg-white text-black text-xl font-bold rounded-xl"
        href=""
      >
        Be A Rider
      </a>
    </div>
  );
};

export default BannerBtn;
