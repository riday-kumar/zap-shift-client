import React from "react";
import service from "../../../assets/service.png";
const OurServices = () => {
  const allOurServices = [
    {
      id: 1,
      heading: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in major cities including Dhaka and Chittagong. Express delivery available in Dhaka within 4–6 hours.",
    },
    {
      id: 2,
      heading: "Nationwide Delivery",
      description:
        "Full home delivery coverage across every district in Bangladesh within 48–72 hours.",
    },
    {
      id: 3,
      heading: "Fulfillment Solution",
      description:
        "Comprehensive inventory management, online order processing, packaging, and after-sales support.",
    },
    {
      id: 4,
      heading: "Cash on Delivery",
      description:
        "100% cash on delivery coverage nationwide with guaranteed product safety.",
    },
    {
      id: 5,
      heading: "Corporate Logistics",
      description:
        "Customized business solutions including warehouse management and contract logistics.",
    },
    {
      id: 6,
      heading: "Reverse Logistics",
      description:
        "Seamless parcel return and exchange facilities for online merchants and their customers.",
    },
  ];

  return (
    <section className="bg-secondary rounded-3xl py-14 lg:py-16 xl:py-20 space-y-12">
      {/* Intro Section */}
      <div className="max-w-3xl mx-auto text-white text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Our Services
        </h2>
        <p className="text-gray-100 leading-relaxed opacity-90">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto ">
        {allOurServices.map(({ id, heading, description }) => (
          <div
            key={id}
            className="group bg-white text-white rounded-3xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary hover:text-white"
          >
            <div className="inline-block rounded-full p-5 bg-[#eeedfc] transition-colors ">
              <img
                className="w-16 h-16 object-contain"
                src={service}
                alt={`${heading} icon`}
                loading="lazy"
              />
            </div>

            <h3 className="text-xl font-bold text-base-100 group-hover:text-white leading-tight">
              {heading}
            </h3>
            <p className="text-gray-600 group-hover:text-white text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
