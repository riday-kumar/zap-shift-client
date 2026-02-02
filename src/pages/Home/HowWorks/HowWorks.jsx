import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowWorks = () => {
  const howWorkDetails = [
    {
      heading: "Booking Pick & Drop",
      para: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      heading: "Cash On Delivery",
      para: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      heading: "Delivery Hub",
      para: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      heading: "Booking SME & Corporate",
      para: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="md:w-11/12 mx-auto">
      <h3 className="text-secondary text-3xl font-bold mb-5">How it Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {howWorkDetails.map((work, index) => (
          <div key={index} className="bg-white p-9 rounded-3xl space-y-3">
            <TbTruckDelivery className="text-6xl text-base-100" />
            <h4 className="text-2xl font-bold text-base-100">{work.heading}</h4>
            <p className="text-[16px] font-medium">{work.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
