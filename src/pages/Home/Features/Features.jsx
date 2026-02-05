import React from "react";
import liveTracker from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";
const Features = () => {
  const features = [
    {
      fea_img: liveTracker,
      fea_head: "Live Parcel Tracking",
      fea_des:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      fea_img: safeDelivery,
      fea_head: "100% Safe Delivery",
      fea_des:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      fea_img: safeDelivery,
      fea_head: "24/7 Call Center Support",
      fea_des:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className="w-11/12 mx-auto space-y-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white flex max-md:flex-col items-center md:gap-10 p-5 md:p-8 rounded-3xl"
        >
          {/* img */}
          <img src={feature.fea_img} alt="" />
          {/* vertical line */}
          <div className="border border-dashed border-[#03373d] h-20 md:h-30 transform-border max-md:rotate-90 rotate-180 m-0 p-0"></div>
          {/* description */}
          <div className="">
            <h4 className="text-2xl font-bold text-base-100 mb-2">
              {feature.fea_head}
            </h4>
            <p className="para font-medium text-justify">{feature.fea_des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
