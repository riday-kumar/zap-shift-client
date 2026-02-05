import React from "react";
import delLocation from "../../../../src/assets/location.png";
import customBg from "../../../../src/assets/custom-bg.png";
const FirstPriority = () => {
  return (
    <div
      className="w-11/12 mx-auto flex max-xl:flex-col gap-10 items-center bg-secondary text-white p-10 md:p-20 rounded-3xl"
      style={{
        backgroundImage: `URL(${customBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="space-y-5 max-xl:text-center">
        <h2 className="text-4xl font-bold">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="para">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex max-md:flex-col max-xl:justify-center gap-10">
          <button className="btn btn-lg btn-primary text-base-100 rounded-full hover:bg-transparent hover:text-primary">
            Become a Merchant
          </button>
          <button className="btn btn-lg bg-transparent text-primary rounded-full hover:bg-primary hover:text-base-100">
            Become a Merchant
          </button>
        </div>
      </div>
      <div>
        <img src={delLocation} alt="" />
      </div>
    </div>
  );
};

export default FirstPriority;
