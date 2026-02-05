import React from "react";
import customerTop from "../../../assets/customer-top.png";
const ReviewHeading = () => {
  return (
    <div className="text-center">
      <img className="mx-auto mb-12" src={customerTop} alt="" />
      <h2 className="text-4xl font-extrabold text-base-100 mb-4">
        What our customers are sayings
      </h2>
      <p className="text-[16px]">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
    </div>
  );
};

export default ReviewHeading;
