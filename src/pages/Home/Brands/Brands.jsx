import React from "react";

import brand1 from "../../../assets/brands/casio.png";
import brand7 from "../../../assets/brands/amazon.png";
import brand2 from "../../../assets/brands/amazon_vector.png";
import brand3 from "../../../assets/brands/moonstar.png";
import brand4 from "../../../assets/brands/randstad.png";
import brand5 from "../../../assets/brands/star.png";
import brand6 from "../../../assets/brands/start_people.png";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <h3 className="text-4xl font-bold text-base-100 mb-14 text-center">
        We've helped thousands of sales teams
      </h3>

      {/* brand carousel */}
      <Marquee>
        <img
          style={{ margin: "0px 50px 0px", height: "30px" }}
          src={brand1}
          alt=""
        />

        <img
          style={{ margin: "0px 50px 0px", height: "30px" }}
          src={brand2}
          alt=""
        />
        <img
          style={{ margin: "0px 50px 0px", height: "30px" }}
          src={brand3}
          alt=""
        />
        <img
          style={{ margin: "0px 50px 0px", height: "30px" }}
          src={brand4}
          alt=""
        />
        <img
          style={{ margin: "0px 50px 0px", height: "30px" }}
          src={brand5}
          alt=""
        />
        <img
          style={{ margin: "0px 50px 0px", height: "30px" }}
          src={brand6}
          alt=""
        />
        <img
          style={{ margin: "0px 50px 0px", height: "30px" }}
          src={brand7}
          alt=""
        />
      </Marquee>
    </div>
  );
};

export default Brands;
